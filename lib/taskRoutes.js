module.exports = function (taskModel) {
	return {
		getAll: function (req, res) {
			taskModel.find({}, function (err, tasks) {
				res.send(tasks);
			});
		},
		getById: function (req, res) {
			taskModel.findById(req.params.id, function (err, task) {
				res.send(task);
			});
		},
		add: function (req, res) {
			var task = new taskModel(req.body);
			task.save(function (err) {
				res.send(201, {message: 'task created'});
			});
		}
	};
};