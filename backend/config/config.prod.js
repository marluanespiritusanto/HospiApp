module.exports = function() {
	return {
		PORT: process.env.PORT || 7000,
		MONGO_URI: 'mongodb://localhost:27017/nghospital'
	};
};
