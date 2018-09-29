const { UploadService, UserService, HospitalService, DoctorService } = require('../../services');

async function upload(req, res, next) {
	try {
		const { type, id } = req.params;
		if (!req.files) {
			return res.status(400).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'file must be sent'
			});
		}

		const file = req.files.picture;
		const splits = file.name.split('.');
		const fileExtension = splits[splits.length - 1];
		const allowedFiles = ['gif', 'jpg', 'jpge', 'png'];
		const allowedTypes = ['doctor', 'hospital', 'user'];
		const isValidType = allowedTypes.includes(type);
		const isAValidFile = allowedFiles.includes(fileExtension);
		let validEntity = null;

		if (!isValidType) {
			return res.status(400).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'Not valid type'
			});
		}

		if (!isAValidFile) {
			return res.status(400).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'Not valid file'
			});
		}

		switch (type) {
			case 'user':
				validEntity = await UserService.getUser(id);
				break;
			case 'hospital':
				validEntity = await HospitalService.getHospital(id);
				break;
			case 'doctor':
				validEntity = await DoctorService.getDoctor(id);
				break;
			default:
				break;
		}

		if (!validEntity) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'entity not found'
			});
		}

		const fileName = `${id}-${new Date().getMilliseconds()}.${fileExtension}`;
		const path = `${__dirname}/../../uploads/${type}s/${fileName}`;

		file.mv(path, err => {
			if (err) throw err;
		});

		const entity = await UploadService.updatePicture(validEntity, type, fileName);

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				message: 'picture updated'
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

module.exports = { upload };
