const { PictureService } = require('../../services');

async function getPicture(req, res, next) {
	try {
		const { entity, fileName } = req.params;
		const image = await PictureService.getImage(entity, fileName);
		return res.sendFile(image);
	} catch (ex) {
		return res.status(500).send({
			error: true,
			serviceName: 'ngHospital API',
			message: ex.message
		});
	}
}

module.exports = {
	getPicture
};
