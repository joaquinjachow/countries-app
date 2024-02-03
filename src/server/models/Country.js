const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  flag: {
    type: String,
    required: true
  },
  continent: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    required: true
  },
  subregion: {
    type: String
  },
  area: {
    type: Number
  },
  population: {
    type: Number,
    required: true // agregado por mi
  },
  createdInDb: {
    type: Boolean,
    required: true,
    default: true
  }
})

module.exports = mongoose.model('Country', countrySchema)
