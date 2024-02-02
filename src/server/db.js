const mongoose = require('mongoose')
require('dotenv').config()
const Country = require('./models/Country.js')
const Activity = require('./models/Activity.js')

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDb Atlas'))
  .catch((error) => console.error(error))

const db = mongoose.connection

Activity.schema.path('countries').validate(async function (value) {
  const countriesCount = await Country.countDocuments({ _id: { $in: value } })
  return countriesCount === value.length
}, 'Invalid countries reference')

module.exports = {
  Country,
  Activity,
  conn: db
}
