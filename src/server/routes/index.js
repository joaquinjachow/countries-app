const express = require('express')
const CountrySchema = require('../models/CountryModel')
const ActivitySchema = require('../models/ActivityModel')
const router = express.Router()

router.get('/countries', (req, res) => {
  const country = CountrySchema(req.body)
  country
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})
router.post('/activity', (req, res) => {
  const activity = ActivitySchema(req.body)
  activity
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})
module.exports = router
