const { UserRepository } = require('../repositories');

function getUser(id) {
	const user = UserRepository.getUser(id);
	return user;
}

function getAllUsers(index) {
	const users = UserRepository.getAllUsers(index);
	return users;
}

function createUser(user) {
	const crearedUser = UserRepository.createUser(user);
	return crearedUser;
}

function updateUser(id, user) {
	const updateUser = UserRepository.updateUser(id, user);
	return updateUser;
}

function deleteUser(id) {
	const deletedUser = UserRepository.deleteUser(id);
	return deletedUser;
}

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
