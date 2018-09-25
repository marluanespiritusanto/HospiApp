const { HospitalService } = require('../../services');

async function getHospital(req, res, next) {
	try {
		const { id } = req.params;
		const hospital = await HospitalService.getHospital(id);

		if (!hospital) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'hospital not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				hospital
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

async function getAllHospitals(req, res, next) {
	try {
		const { page } = req.query;
		const hospitals = await HospitalService.getAllHospitals(parseInt(page) || 0);
		return res.status(201).send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				hospitals,
				count: hospitals.count
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

async function createHospital(req, res, next) {
	try {
		req.body.user = req.user;
		const hospital = req.body;
		const createdHospital = await HospitalService.createHospital(hospital);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				createdHospital
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

async function updateHospital(req, res, next) {
	try {
		const { id } = req.params;
		const hospital = req.body;
		const updatedHospital = await HospitalService.updateHospital(id, hospital);

		if (!updatedHospital) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'hospital not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				updatedHospital
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

async function deleteHospital(req, res, next) {
	try {
		const { id } = req.params;
		const deletedHospital = await HospitalService.deleteHospital(id);
		if (!deletedHospital) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'hospital not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				deletedHospital
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
	getAllHospitals,
	getHospital,
	createHospital,
	updateHospital,
	deleteHospital
};
