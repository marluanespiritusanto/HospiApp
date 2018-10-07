const { HospitalSchema, DoctorSchema, UserSchema } = require('./schemas');

async function searchAll(query) {
	const regex = new RegExp(query, 'i');
	const hospitals = await HospitalSchema.find({ name: regex });
	const doctors = await DoctorSchema.find({ name: regex });
	const users = await UserSchema.find({ name: regex });
	return {
		hospitals,
		doctors,
		users
	};
}

async function searchDoctors(query) {
	const regex = new RegExp(query, 'i');
	const doctors = await DoctorSchema.find({ name: regex });
	return {
		doctors
	};
}

async function searchUsers(query) {
	const regex = new RegExp(query, 'i');
	const users = await UserSchema.find({ name: regex });
	return {
		users
	};
}

async function searchHospitals(query) {
	const regex = new RegExp(query, 'i');
	const hospitals = await HospitalSchema.find({ name: regex });
	return {
		hospitals
	};
}

module.exports = {
	searchAll,
	searchDoctors,
	searchHospitals,
	searchUsers
};
