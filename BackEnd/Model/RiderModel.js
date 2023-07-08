const mongoose = require("mongoose");

const InterFaceRider = new mongoose.Schema({
  Id: {
    type: Number,
    // required: [true],
  },
  Name: {
    type: String,
    // required: [true],
  },
  Email: {
    type: String,
    // required: [true],
  },
  Position: {
    typle: String,
    // required: [true],
  },
  NRIC: {
    type: String,
    // required: [true],
  },
  Status: {
    type: String,
    // required: [true],
  },
  Image: {
    type: String,
    // required: [true],
  },
});


module.export = mongoose.model('rider',InterFaceRider)