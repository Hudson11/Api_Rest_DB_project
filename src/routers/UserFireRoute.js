const router = require('express').Router()
const controller = require('../controllers/UserControllerFirebase');

router.post('/userfire', controller.create);
router.get('/userfire/:path', controller.findAll);
router.delete('/userfire/:path', controller.delete);

module.exports = router;

