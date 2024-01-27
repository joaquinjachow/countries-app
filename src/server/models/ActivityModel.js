const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
  name: {
    type: String,
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

module.exports = mongoose.model('Activity', ActivitySchema)
