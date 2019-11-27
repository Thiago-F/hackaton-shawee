const express = require('express');
const routes = express.Router();

const EscolaController = require('./controllers/EscolaController');
const EmpresaControlador = require('./controllers/EmpresaControlador');
const VisitacaoControlador = require('./controllers/VisitacaoControlador');

routes.get('/escola', EscolaController.index);
routes.get('/escola/:id', EscolaController.show);
routes.post('/escola', EscolaController.store);
routes.delete('/escola/:id', EscolaController.destroy);

routes.get('/empresas', EmpresaControlador.index);
routes.post('/empresas', EmpresaControlador.store);
routes.get('/empresas/:id', EmpresaControlador.show);
routes.delete('/empresas/:id', EmpresaControlador.destroy);

routes.post('/visitacoes', VisitacaoControlador.store);
routes.get('/visitacoes/empresa/:id', VisitacaoControlador.showEmpresa);
routes.get('/visitacoes/escola/:id', VisitacaoControlador.showEscola);
routes.put('/visitacoes/:id', VisitacaoControlador.update);
routes.delete('/visitacoes/:id', VisitacaoControlador.destroy);

const UserController = require('./controllers/UserController');
routes.get('/login/escola/:email',UserController.store);
routes.get('/login/empresa/:email',UserController.store2);

module.exports = routes;