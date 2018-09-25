const { AccountRepository } = require('../repositories');

function getUserByEmail(email) {
	const userExists = AccountRepository.getUserByEmail(email);
	return userExists;
}

module.exports = {
	getUserByEmail
};
