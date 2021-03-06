const Box = require('../models/Box');

class BoxController {

  async store (req, res) {
    const box = await Box.create({ title: req.body.title }); // Poderia ser "req.body" somente pois o mesmo só tem a propriedade title dentro
    return res.json(box);
  }

  async show (req, res) {
    const box = await  Box.findById(req.params.id).populate({
      path: 'files',
      options: {
        sort: { createdAt: -1 } // -1 => Indica ordenação decrescente
      }
    });

    return res.json(box);
  }
}

module.exports = new BoxController(); // Retornado uma instância da classe pois senão o que será retornado será a própria classe
