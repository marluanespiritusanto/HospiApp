const { SearchService } = require('../../services');

async function searchAll(req, res, next) {
	try {
		const { query } = req.query;
		const all = await SearchService.searchAll(query);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				all
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

async function searchUsers(req, res, next) {
	try {
		const { query } = req.query;
		const users = await SearchService.searchUsers(query);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				users: users.users
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

async function searchHospitals(req, res, next) {
	try {
		const { query } = req.query;
		const hospitals = await SearchService.searchHospitals(query);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				hospitals: hospitals.hospitals
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

async function searchDoctors(req, res, next) {
	try {
		const { query } = req.query;
		const doctors = await SearchService.searchDoctors(query);
		return res.send({
			error: false,
			serviceName: 'ngHospital API',
			message: null,
			payload: {
				doctors: doctors.doctors
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
	searchAll,
	searchDoctors,
	searchHospitals,
	searchUsers
};
