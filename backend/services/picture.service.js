const fs = require('fs');
const path = require('path');

function getImage(entity, fileName) {
	const filePath = path.resolve(__dirname, `../uploads/${entity}s/${fileName}`);
	const defaultImage = path.resolve(__dirname, '../assets/noimage.jpg');

	return fs.existsSync(filePath) ? filePath : defaultImage;
}

module.exports = {
	getImage
};
