const express = require('express')
const CountrySchema = require('../models/CountryModel')
const router = express.Router()

// create user
router.post('/users', (req, res) => {
  const user = CountrySchema(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router
