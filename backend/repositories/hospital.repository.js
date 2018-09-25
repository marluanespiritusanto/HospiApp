const { HospitalSchema } = require('./schemas');

async function getHospital(id) {
	const hospital = await HospitalSchema.findById(id);
	return hospital;
}

async function getAllHospitals(index) {
	const hospitals = await HospitalSchema.find({})
		.populate('user', 'name email')
		.skip(index)
		.limit(2);
	const count = await HospitalSchema.count();
	doctors.count = count;
	return hospitals;
}

async function createHospital(hospital) {
	const hospitalExits = await HospitalSchema.findOne({ name: hospital.name });
	if (hospitalExits) {
		throw new Error('Hospital already exists');
	}

	const hospitalCreated = HospitalSchema.create([
		{
			name: hospital.name,
			user: hospital.user._id,
			picture: hospital.picture
		}
	]);

	return hospitalCreated;
}

async function updateHospital(id, hospital) {
	const hospitalUpdated = await HospitalSchema.findByIdAndUpdate(id, hospital, { new: true });
	return hospitalUpdated;
}

async function deleteHospital(id) {
	const hospitalDeleted = await HospitalSchema.findByIdAndRemove(id);
	return hospitalDeleted;
}
module.exports = {
	getHospital,
	getAllHospitals,
	createHospital,
	updateHospital,
	deleteHospital
};
