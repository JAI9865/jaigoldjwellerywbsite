const express = require('express');
const router = express.Router();
const Product = require('../models/ProductRing');


router.post('/add', async (req, res) => {
  try {
    const { name, price, img } = req.body;

    if (!name || !price || !img) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const product = new Product({ name, price, img });
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});


router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price img'); 
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
