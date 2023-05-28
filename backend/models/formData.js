const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  file: String,
  technology: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
