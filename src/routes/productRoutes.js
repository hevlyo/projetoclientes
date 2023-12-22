const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Rotas CRUD
router.get('/produtos', productController.listProducts);
router.get('/produtos/:id', productController.getProductById);
router.post('/produtos', productController.createProduct);
router.put('/produtos/:id', productController.updateProduct);
router.delete('/produtos/:id', productController.deleteProduct);

module.exports = router;
