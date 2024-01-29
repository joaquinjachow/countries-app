const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  id: {
    type: String,
    require: true,
    unique: true
  },
  flag: {
    type: String,
    require: true
  },
  continent: {
    type: String,
    require: true
  },
  capital: {
    type: String,
    require: false
  },
  subregion: {
    type: String
  },
  area: {
    type: Number
  },
  population: {
    type: Number,
    require: true // agregado por mi
  },
  createdInDb: {
    type: Boolean,
    require: true,
    default: true
  }
})

module.exports = mongoose.model('Country', countrySchema)
