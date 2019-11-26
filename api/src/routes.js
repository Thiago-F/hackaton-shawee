const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const EmpresaControlador = require('./controllers/EmpresaControlador');

routes.get('/empresas', EmpresaControlador.index);
routes.get('/empresas/:id', EmpresaControlador.show);
routes.post('/empresas', EmpresaControlador.store);
routes.delete('/empresas/:id', EmpresaControlador.destroy);

module.exports = routes;