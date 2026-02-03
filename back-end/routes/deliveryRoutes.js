const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

router.post('/delivery', async (req, res) => {
  const { building, area, landmark, pincode, city, state } = req.body;

  if (!building || !area || !pincode || !city || !state) {
    return res.status(400).json({ message: 'All required fields must be filled.' });
  }

  try {
    const newAddress = new Address({ building, area, landmark, pincode, city, state });
    await newAddress.save();
    res.status(200).json({ message: 'Address saved successfully!' });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;