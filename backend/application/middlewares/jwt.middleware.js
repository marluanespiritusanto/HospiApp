const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');

module.exports = function(req, res, next) {
	const token = req.headers['authorization'];

	if (token) {
		jwt.verify(token, JWT_SECRET, function(err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token'
				});
			} else {
				req.user = decoded.user[0] || decoded.user;
				next();
			}
		});
	} else {
		return res.status(403).send({
			error: false,
			serviceName: 'ngHospital API',
			message: 'token missing'
		});
	}
};
