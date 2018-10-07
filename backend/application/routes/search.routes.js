const { SearchController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/all', JWTMiddleware, SearchController.searchAll);
router.get('/users', JWTMiddleware, SearchController.searchUsers);
router.get('/hospitals', JWTMiddleware, SearchController.searchHospitals);
router.get('/doctors', JWTMiddleware, SearchController.searchDoctors);

module.exports = router;
