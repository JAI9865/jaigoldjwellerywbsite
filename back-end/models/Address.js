const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  building: String,
  area: String,
  landmark: String,
  pincode: String,
  city: String,
  state: String,
});

module.exports = mongoose.model('Address', addressSchema);