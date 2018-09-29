const { PictureController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/:entity/:fileName', JWTMiddleware, PictureController.getPicture);

module.exports = router;
