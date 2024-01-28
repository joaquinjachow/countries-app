const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    allowNull: false
  },
  dificulty: {
    type: Number
  },
  duration: {
    type: String
  },
  season: {
    type: String,
    enum: ['summer', 'autumn', 'winter', 'spring']
  },
  createdInDb: {
    type: Boolean,
    default: true,
    allowNull: false
  }
})

module.exports = mongoose.model('Country', countrySchema)
