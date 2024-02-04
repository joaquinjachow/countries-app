const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
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
    required: true
  },
  countries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }]
})

module.exports = mongoose.model('Activity', ActivitySchema)
