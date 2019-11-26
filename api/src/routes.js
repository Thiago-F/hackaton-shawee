const express = require('express');
const routes = express.Router();

const EscolaController = require('./controllers/EscolaController');

routes.get('/escola', EscolaController.index);
routes.get('/escola/:id', EscolaController.show);
routes.post('/escola', EscolaController.store);
routes.delete('/escola/:id', EscolaController.destroy);

module.exports = routes;