const { AccountController } = require('../controllers');
const router = require('express').Router();

router.post('/login', AccountController.login);
router.post('/login/google', AccountController.loginGoogle);

module.exports = router;
