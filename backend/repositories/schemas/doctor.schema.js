var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
	name: { type: String, required: [true, 'doctor name is required'] },
	picture: { type: String, required: false },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	hospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: [true, 'hospitalId is required'] }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
