const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function generateToken(user) {
	return jwt.sign({ user }, JWT_SECRET, { expiresIn: 14400 });
}

module.exports = {
	generateToken
};
