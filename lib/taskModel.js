var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
	description: String,
	complete: Boolean
});

module.exports = function (db) {
	return db.model('Task', TaskSchema);
};