const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); // Usada para trabalhar em real time

io.on('connection', socket => {
  socket.on('connectRoom', box => socket.join(box));
});

mongoose.connect('mongodb+srv://pcfmello:ciclismo@cluster0-3fpe5.mongodb.net/node_omni_project_dropbox?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Middleware que define que a partir daqui toda requisição terá acesso ao io através do req.io
app.use((req, res, next) => {
  req.io = io;

  return next(); // Passa para o próximo middleware, senão a mesma pára por aqui
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Toda vez que for acessada a rota files, essa pasta será carregada na memória

server.listen(3000);
