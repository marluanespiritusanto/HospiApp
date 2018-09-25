const { DoctorSchema } = require('./schemas');

async function getDoctor(id) {
	const doctor = await DoctorSchema.findById(id);
	return doctor;
}

async function getAllDoctors(index) {
	const doctors = await DoctorSchema.find({})
		.populate('user', 'name email')
		.populate('hospital')
		.skip(index)
		.limit(5);

	const count = await DoctorSchema.count();
	doctors.count = count;
	return doctors;
}

async function createDoctor(doctor) {
	const doctorExits = await DoctorSchema.findOne({ name: doctor.name });
	if (doctorExits) {
		throw new Error('Doctor already exists');
	}

	const doctorCreated = DoctorSchema.create([
		{
			name: doctor.name,
			user: doctor.user._id,
			picture: doctor.picture,
			hospital: doctor.hospital
		}
	]);

	return doctorCreated;
}

async function updateDoctor(id, doctor) {
	const doctorUpdated = await DoctorSchema.findByIdAndUpdate(id, doctor, { new: true });
	return doctorUpdated;
}

async function deleteDoctor(id) {
	const doctorDeleted = await DoctorSchema.findByIdAndRemove(id);
	return doctorDeleted;
}
module.exports = {
	getDoctor,
	getAllDoctors,
	createDoctor,
	updateDoctor,
	deleteDoctor
};
