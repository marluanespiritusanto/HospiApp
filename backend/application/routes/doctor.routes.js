const { DoctorController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/', DoctorController.getAllDoctors);
router.get('/:id', DoctorController.getDoctor);
router.post('/', JWTMiddleware, DoctorController.createDoctor);
router.put('/:id', JWTMiddleware, DoctorController.updateDoctor);
router.delete('/:id', JWTMiddleware, DoctorController.deleteDoctor);

module.exports = router;
