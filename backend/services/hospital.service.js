const { HospitalRepository } = require('../repositories');

function getHospital(id) {
	const hospital = HospitalRepository.getHospital(id);
	return hospital;
}

function getAllHospitals(index) {
	const hospitals = HospitalRepository.getAllHospitals(index);
	return hospitals;
}

function createHospital(hospital) {
	const createdHospital = HospitalRepository.createHospital(hospital);
	return createdHospital;
}

function updateHospital(id, hospital) {
	const updateHospital = HospitalRepository.updateHospital(id, hospital);
	return updateHospital;
}

function deleteHospital(id) {
	const deletedHospital = HospitalRepository.deleteHospital(id);
	return deletedHospital;
}

module.exports = {
	getAllHospitals,
	getHospital,
	createHospital,
	updateHospital,
	deleteHospital
};
