const multer = require('multer'); // Biblioteca para trabalhar com arquivos (envios, etc)
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
  storage: multer.diskStorage({ // multer.diskStorage => Armazena os arquivos no disco
    destination: (name, file, callback) => callback(null, path.resolve(__dirname, '..', '..', 'tmp')),

    /* filename => Determina o nome que o arquivo ficará salvo dentro da pasta tmp.
       Deve salvar um arquivo em que o nome nunca seja igual para não sobrescrever o arquivo enviado por outra pessoa */
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        // hash => gera uma string de 16 bits
        file.key = `${hash.toString('hex')}-${file.originalname}`;
        callback(null, file.key);
      })
    }
  })
};
