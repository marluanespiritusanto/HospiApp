const { GOOGLE_CLIENT_ID } = require('../../config');
const { AccountService, JWTService } = require('../../services');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const { UserService } = require('../../services');

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
				error: false,
				currentUser: userExits,
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

async function verify(token) {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: GOOGLE_CLIENT_ID
	});
	const payload = ticket.getPayload();
	const userid = payload['sub'];
	return {
		name: payload.name,
		email: payload.email,
		picture: payload.picture,
		google: true
	};
}

async function loginGoogle(req, res, next) {
	try {
		const { token } = req.body;

		const googleUser = await verify(token);

		const userExits = await AccountService.getUserByEmail(googleUser.email);
		if (!userExits) {
			const user = {
				name: googleUser.name,
				email: googleUser.email,
				picture: googleUser.picture,
				isGoogleUser: true,
				password: 'password'
			};

			const createdUser = (await UserService.createUser(user))[0];
			return res.send({
				error: false,
				serviceName: 'ngHospital API',
				message: null,
				payload: {
					currentUser: createdUser,
					token: JWTService.generateToken(createdUser)
				}
			});
		}

		if (userExits.isGoogleUser) {
			return res.send({
				error: false,
				serviceName: 'ngHospital API',
				message: null,
				payload: {
					currentUser: userExits,
					token: JWTService.generateToken(userExits)
				}
			});
		} else {
			return res.status(400).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'you must login with your app account'
			});
		}
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

module.exports = {
	login,
	loginGoogle
};
