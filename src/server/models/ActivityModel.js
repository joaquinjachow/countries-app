const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
  name: {
    type: String,
    require: true
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
    require: true
  }
})

module.exports = mongoose.model('Activity', ActivitySchema)
