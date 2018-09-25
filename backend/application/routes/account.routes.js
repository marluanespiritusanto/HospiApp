const { AccountController } = require('../controllers');
const router = require('express').Router();

router.post('/login', AccountController.login);

module.exports = router;
