var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
	function  (value) {
		return (value.length > 0 && value.toLocaleLowerCase() != 'none');
	},
	'Select a valid member name'
];

var requiredStringValidator = [
	function (value) {
		var testValue = value.trim();
		return (testValue.length > 0);
	}
];

var standupSchema = new Schema ({
	memberName: {
		type: String,
		required: true
	},
	project: {
		type: String,
		required: true
	},
	workYesterday: {
		type: String,
		required: true
	},
	workToday: {
		type: String,
		required: true
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Standup', standupSchema);