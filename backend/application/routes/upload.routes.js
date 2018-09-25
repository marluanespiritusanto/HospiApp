const { UploadController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.put('/:type/:id', JWTMiddleware, UploadController.upload);

module.exports = router;
