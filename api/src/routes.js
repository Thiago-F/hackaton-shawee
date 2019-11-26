const express = require('express');
const routes = express.Router();


const EscolaController = require('./controllers/EscolaController');

routes.get('/escola', EscolaController.index);
routes.get('/escola/:id', EscolaController.show);
routes.post('/escola', EscolaController.store);
routes.delete('/escola/:id', EscolaController.destroy);

const ProductController = require('./controllers/ProductController');
const EmpresaControlador = require('./controllers/EmpresaControlador');

routes.get('/empresas', EmpresaControlador.index);
routes.get('/empresas/:id', EmpresaControlador.show);
routes.post('/empresas', EmpresaControlador.store);
routes.delete('/empresas/:id', EmpresaControlador.destroy);


module.exports = routes;