var router = require('express').Router();

var indexController = require('../controllers/userController')

router.get('/', indexController.index);


module.exports = router;