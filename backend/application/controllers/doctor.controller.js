const { DoctorService } = require('../../services');

async function getDoctor(req, res, next) {
	try {
		const { id } = req.params;
		const doctor = await DoctorService.getDoctor(id);

		if (!doctor) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'doctor not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				doctor
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

async function getAllDoctors(req, res, next) {
	try {
		const { page } = req.query;
		const doctors = await DoctorService.getAllDoctors(parseInt(page) || 0);
		return res.status(200).send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				doctors,
				count: doctors.count
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

async function createDoctor(req, res, next) {
	try {
		req.body.user = req.user;
		const doctor = req.body;
		const createdDoctor = await DoctorService.createDoctor(doctor);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				createdDoctor
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

async function updateDoctor(req, res, next) {
	try {
		const { id } = req.params;
		const doctor = req.body;
		const updatedDoctor = await DoctorService.updateDoctor(id, doctor);

		if (!updatedDoctor) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'doctor not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				updatedDoctor
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

async function deleteDoctor(req, res, next) {
	try {
		const { id } = req.params;
		const deleteDoctor = await DoctorService.deleteDoctor(id);
		if (!deleteDoctor) {
			return res.status(404).send({
				error: false,
				serviceName: 'ngHospital API',
				message: 'doctor not found'
			});
		}

		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				deleteDoctor
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
	getAllDoctors,
	getDoctor,
	createDoctor,
	updateDoctor,
	deleteDoctor
};
