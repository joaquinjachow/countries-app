const { Router } = require('express')
const { postActivity } = require('../controllers/activityController')

const router = Router()

router.post('/', postActivity)

module.exports = router
