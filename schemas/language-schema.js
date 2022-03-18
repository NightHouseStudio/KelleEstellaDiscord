const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true
}

const languageSchema = mongoose.Schema({
  // Guild Id
  _id: reqString,
  language: reqString
})

module.exports = mongoose.model('language', languageSchema)