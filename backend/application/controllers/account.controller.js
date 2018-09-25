const { AccountService, JWTService } = require('../../services');

async function login(req, res, next) {
	try {
		const { email, password } = req.body;
		const userExits = await AccountService.getUserByEmail(email);
		if (!userExits) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'user not found'
			});
		}

		const validPassword = await userExits.comparePasswords(password);
		if (!validPassword) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'invalid password'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				token: JWTService.generateToken(userExits)
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
	login
};
