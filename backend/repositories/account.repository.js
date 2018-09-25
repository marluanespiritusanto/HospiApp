const { UserSchema } = require('./schemas');

async function getUserByEmail(email) {
	const userExists = await UserSchema.findOne({ email });
	return userExists;
}

module.exports = {
	getUserByEmail
};
