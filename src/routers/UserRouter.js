const router = require('express').Router()
const userControler = require('../controllers/UserController')

router.post('/user', userControler.create)
router.delete('/user', userControler.deleteAll)
router.get('/user', userControler.listUsers)

module.exports = router

