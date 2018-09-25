const { SearchController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/all', JWTMiddleware, SearchController.searchAll);

module.exports = router;
