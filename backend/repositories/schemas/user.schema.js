const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
	name: { type: String, required: [true, 'name is required'] },
	lastname: { type: String },
	email: { type: String, required: [true, 'email is required'], unique: true },
	password: { type: String, required: [true, 'password is required'] },
	picture: { type: String },
	role: { type: String, required: true, default: 'USER_ROLE' },
	isGoogleUser: { type: Boolean, default: false }
});

UserSchema.methods.toJSON = function() {
	let user = this.toObject();
	delete user.password;
	return user;
};

UserSchema.pre('save', function(next) {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			next(err);
		}
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if (err) {
				next(err);
			}
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePasswords = function(password, callback) {
	return new Promise((revolse, reject) => {
		bcrypt.compare(password, this.password, (err, areEqueals) => {
			if (err) {
				reject(err);
			}
			revolse(areEqueals);
		});
	});
};

module.exports = mongoose.model('User', UserSchema);
