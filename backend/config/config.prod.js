module.exports = function() {
	return {
		PORT: process.env.PORT || 7000,
		MONGO_URI: 'mongodb://localhost:27017/nghospital',
		JWT_SECRET: 'prodsecret5897234932yrj23hbrr23t74823482348236423ge23e'
	};
};
