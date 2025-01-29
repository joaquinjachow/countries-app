const mongoose = require('mongoose')
const Country = require('./models/Country.js')
const Activity = require('./models/Activity.js')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDb Atlas'))
  .catch((error) => console.error(error))

const db = mongoose.connection

Activity.schema.path('countries').validate(async function (value) {
  const countriesCount = await Country.countDocuments({ _id: { $in: value } })
  if (countriesCount !== value.length) {
    throw new Error('❌ Invalid countries reference')
  }
  return true
})

module.exports = {
  Country,
  Activity,
  conn: db
}
