const { Router } = require('express')
const { getCountries, getCountryById } = require('../controllers/countryController')

const router = Router()

router.get('/', getCountries)
router.get('/:id', getCountryById)

module.exports = router
