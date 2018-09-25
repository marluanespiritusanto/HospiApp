const { UserController } = require('../controllers');
const router = require('express').Router();
const { JWTMiddleware } = require('../middlewares');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.post('/', JWTMiddleware, UserController.createUser);
router.put('/:id', JWTMiddleware, UserController.updateUser);
router.delete('/:id', JWTMiddleware, UserController.deleteUser);

module.exports = router;
