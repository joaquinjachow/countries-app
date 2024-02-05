const { Router } = require('express')
const countryRouter = require('./Countries')

const router = Router()

router.use('/countries', countryRouter)

module.exports = router
