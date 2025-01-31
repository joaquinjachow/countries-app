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
    type: Number,
    min: 0
  },
  population: {
    type: Number,
    required: true,
    min: 0
  },
  createdInDb: {
    type: Boolean,
    default: true
  },
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
})

module.exports = mongoose.model('Country', countrySchema)
