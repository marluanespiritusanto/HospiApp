const { DoctorRepository, HospitalRepository, UserRepository } = require('../repositories');
const fs = require('fs');

async function updatePicture(type, id, fileName) {
	let response = null;
	switch (type) {
		case 'user':
			const isAValidUser = await UserRepository.getUser(id);
			if (!isAValidUser) {
				throw new Error('invalid user');
			}

			const oldPicturePath = `${__dirname}/../uploads/users/${isAValidUser.picture}`;
			if (fs.existsSync(oldPicturePath)) {
				fs.unlink(oldPicturePath, err => {
					if (err) throw err;
				});
			}

			isAValidUser.picture = fileName;
			isAValidUser.save((err, updatedUser) => {
				if (err) throw err;
				response = updatedUser;
				return response;
			});

			break;
		case 'hospital':
			break;
		case 'doctor':
			break;
	}
}

module.exports = {
	updatePicture
};
