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

module.exports = {
	searchAll
};
