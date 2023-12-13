const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rotas CRUD
router.get('/clientes', clientController.listClients);
router.get('/clientes/:id', clientController.getClientById);
router.post('/clientes', clientController.createClient);
router.put('/clientes/:id', clientController.updateClient);
router.delete('/clientes/:id', clientController.deleteClient);

module.exports = router;
