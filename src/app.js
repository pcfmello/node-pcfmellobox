const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://pcfmello:ciclismo@cluster0-3fpe5.mongodb.net/node_omni_project_dropbox?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Toda vez que for acessada a rota files, essa pasta será carregada na memória

module.exports = app;
