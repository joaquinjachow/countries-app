const { Router } = require('express')
const countryRouter = require('./countries')

const router = Router()

router.use('/countries', countryRouter)

module.exports = router
