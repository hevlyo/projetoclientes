const express = require('express');
const Router = express.Router();
const clientController = require('../controllers/clientController.js');

Router.get('/clientes', clientController.listClients);
Router.get('/clientes/:id', clientController.listClientById);
Router.post('/clientes', clientController.createClient);
Router.put('/clientes/:id', clientController.updateClient);
Router.delete('/clientes/:id', clientController.deleteClient);

module.exports = Router;