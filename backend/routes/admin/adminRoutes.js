const express = require('express');
const authenticateAdmin = require('../../middlewares/authMiddleware');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../../controllers/productController');
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../../controllers/categoryController');

const router = express.Router();

// Admin login route
router.post('/login', authenticateAdmin, (req, res) => {
  res.status(200).json({ message: 'Admin authenticated successfully' });
});

// Admin category routes
router.get('/categories', authenticateAdmin, getAllCategories);
router.post('/categories', authenticateAdmin, createCategory);
router.put('/categories/:id', authenticateAdmin, updateCategory);
router.delete('/categories/:id', authenticateAdmin, deleteCategory);

// Admin product routes
router.get('/products', authenticateAdmin, getAllProducts);
router.post('/products', authenticateAdmin, createProduct);
router.put('/products/:id', authenticateAdmin, updateProduct);
router.delete('/products/:id', authenticateAdmin, deleteProduct);

module.exports = router;