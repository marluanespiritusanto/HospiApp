const { UserSchema } = require('./schemas');

async function getUser(id) {
	const user = await UserSchema.findById(id);
	return user;
}

async function getAllUsers(index) {
	const users = await UserSchema.find({})
		.skip(index)
		.limit(5);

	const count = await UserSchema.countDocuments();
	users.countDocuments = count;
	return users;
}

async function createUser(user) {
	const userExits = await UserSchema.findOne({ email: user.email });
	if (userExits) {
		throw new Error('Email already exists');
	}

	const userCreated = UserSchema.create([
		{
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			password: user.password,
			picture: user.picture,
			isGoogleUser: user.isGoogleUser || false
		}
	]);

	return userCreated;
}

async function updateUser(id, user) {
	const userUpdated = await UserSchema.findByIdAndUpdate(id, user, { new: true });
	return userUpdated;
}

async function deleteUser(id) {
	const deletedUser = await UserSchema.findByIdAndRemove(id);
	return deletedUser;
}

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
