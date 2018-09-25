const { SearchRepository } = require('../repositories');

function searchAll(query) {
	const all = SearchRepository.searchAll(query);
	return all;
}

module.exports = {
	searchAll
};
