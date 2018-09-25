const { UserService } = require('../../services');

async function getUser(req, res, next) {
	try {
		const { id } = req.params;
		const user = await UserService.getUser(id);

		if (!user) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'user not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				user
			}
		});
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

async function getAllUsers(req, res, next) {
	try {
		const { page } = req.query;
		const users = await UserService.getAllUsers(parseInt(page) || 0);
		return res.status(201).send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				users,
				count: users.count
			}
		});
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

async function createUser(req, res, next) {
	try {
		const user = req.body;
		const createdUser = await UserService.createUser(user);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				createdUser
			}
		});
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

async function updateUser(req, res, next) {
	try {
		const { id } = req.params;
		const user = req.body;
		const updatedUser = await UserService.updateUser(id, user);

		if (!updatedUser) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'user not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				updatedUser
			}
		});
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

async function deleteUser(req, res, next) {
	try {
		const { id } = req.params;
		const deleteUser = await UserService.deleteUser(id);
		if (!deleteUser) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'user not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				deleteUser
			}
		});
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
