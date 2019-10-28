const mongoose = require('mongoose');

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true }, // toObject ou toJSON com virtuals => Indica para toda vez que a classe for carregada deve carregar o campo do tipo virtual
    toJSON: { virtuals: true }
  }
);

// Atributo temporário (fora do BD) para armazenar temporariamente o dado. Criado para o frontend acessar o arquivo.
File.virtual('url').get(function() { // Declarado como function para poder acessar o this como a classe.
  return `http://localhost:3000/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);
