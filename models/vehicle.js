const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  sellingId: { type: String, required: true, unique: true },
  Brand: { type: String, required: true },
  Model: { type: String, required: true },
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  uploaded: Boolean,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
