const { UserController } = require('../controllers');
const router = require('express').Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
