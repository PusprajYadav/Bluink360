const mongoose = require("mongoose");

const AlumniSchema2 = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  companyPlaced: {
    type: String,
    required: true,
  },
  packages: {
    type: Number,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
});

const AlumniModel2 = mongoose.model("Alumni", AlumniSchema2);
module.exports = AlumniModel2;
