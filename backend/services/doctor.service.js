const { DoctorRepository } = require('../repositories');

function getDoctor(id) {
	const doctor = DoctorRepository.getDoctor(id);
	return doctor;
}

function getAllDoctors() {
	const doctors = DoctorRepository.getAllDoctors();
	return doctors;
}

function createDoctor(doctor) {
	const crearedDoctor = DoctorRepository.createDoctor(doctor);
	return crearedDoctor;
}

function updateDoctor(id, doctor) {
	const updateDoctor = DoctorRepository.updateDoctor(id, doctor);
	return updateDoctor;
}

function deleteDoctor(id) {
	const deletedDoctor = DoctorRepository.deleteDoctor(id);
	return deletedDoctor;
}

module.exports = {
	getAllDoctors,
	getDoctor,
	createDoctor,
	updateDoctor,
	deleteDoctor
};
