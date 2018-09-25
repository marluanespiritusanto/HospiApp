const mongoose = require('mongoose');

module.exports = function(database, URI) {
	if (database === 'mongo') {
		mongoose.Promise = global.Promise;
		return mongoose.connect(
			URI,
			{ useNewUrlParser: true, useCreateIndex: true }
		);
	} else {
		console.log('Not database selected');
	}
};
