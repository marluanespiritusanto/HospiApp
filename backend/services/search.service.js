const { SearchRepository } = require('../repositories');

function searchAll(query) {
	const all = SearchRepository.searchAll(query);
	return all;
}

function searchDoctors(query) {
	const doctors = SearchRepository.searchDoctors(query);
	return doctors;
}

function searchUsers(query) {
	const users = SearchRepository.searchUsers(query);
	return users;
}

function searchHospitals(query) {
	const hospitals = SearchRepository.searchHospitals(query);
	return hospitals;
}

module.exports = {
	searchAll,
	searchDoctors,
	searchHospitals,
	searchUsers
};
