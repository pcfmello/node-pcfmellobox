const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
