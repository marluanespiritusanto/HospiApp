const fs = require('fs');

async function updatePicture(entity, type, fileName) {
	let response = null;

	const oldPicturePath = `${__dirname}/../uploads/${type}/${entity.picture}`;
	if (fs.existsSync(oldPicturePath)) {
		fs.unlink(oldPicturePath, err => {
			if (err) throw err;
		});
	}

	entity.picture = fileName;
	entity.save((err, updatedEntity) => {
		if (err) throw err;
		response = updatedEntity;
		return response;
	});

	return response;
}

module.exports = {
	updatePicture
};
