const express = require('express');
const equipamentos = require('./equipamentosRoute.js');
const categorias = require('./categoriasRoute.js');
const componentes = require('./componentesRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    equipamentos,
    categorias,
    componentes
  );
};