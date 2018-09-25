var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HospitalSchema = new Schema({
	name: { type: String, required: [true, 'name is required'] },
	picture: { type: String, required: false },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Hospital', HospitalSchema);
