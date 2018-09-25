const { HospitalController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/', JWTMiddleware, HospitalController.getAllHospitals);
router.get('/:id', JWTMiddleware, HospitalController.getHospital);
router.post('/', JWTMiddleware, HospitalController.createHospital);
router.put('/:id', JWTMiddleware, HospitalController.updateHospital);
router.delete('/:id', JWTMiddleware, HospitalController.deleteHospital);

module.exports = router;
