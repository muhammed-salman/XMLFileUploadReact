const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  hash: {type: String, unique: true},
  vehicles: [{
    id: String,
    frame: { material: String},
    powertrain: String,
    wheels: { wheel:[{
      position: String,
      material: String
    }]}
    // type: String
  }],
  xmlFileString: String,
  fileAttr: Object,
  timeStamp: String
});

// Create the model class
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Export the model
module.exports = Vehicle;
