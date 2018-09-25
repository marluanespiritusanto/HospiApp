const { HospitalSchema, DoctorSchema } = require('./schemas');

async function searchAll(query) {
	const regex = new RegExp(query, 'i');
	const hospitals = await HospitalSchema.find({ name: regex });
	const doctors = await DoctorSchema.find({ name: regex });
	return {
		hospitals,
		doctors
	};
}

async function searchDoctors(query) {
	const regex = new RegExp(query, 'i');
	const hospitals = await HospitalSchema.find({ name: regex });
	const doctors = await DoctorSchema.find({ name: regex });
	return {
		hospitals,
		doctors
	};
}

module.exports = {
	searchAll
};
