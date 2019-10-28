const File = require('../models/File');
const Box = require('../models/Box');

class FileController {

  async store (req, res) {
    const box = await Box.findById(req.params.id);

    const file = await  File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    box.files.push(file);

    await box.save();

    req.io.sockets // Pego todos usuários
      .in(box._id) // conectados nessa box (box._id)
      .emit('file', file); // e envia uma informação com os dados do arquivo salvo na mesma.

    return res.json(file);
  }
}

module.exports = new FileController(); // Retornado uma instância da classe pois senão o que será retornado será a própria classe
