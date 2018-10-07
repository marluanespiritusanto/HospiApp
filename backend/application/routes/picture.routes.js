const { PictureController } = require('../controllers');
const router = require('express').Router();

router.get('/:entity/:fileName', PictureController.getPicture);

module.exports = router;
