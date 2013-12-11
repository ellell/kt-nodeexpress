var express = require('express');
var app = express();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/todoapp');

var taskModel = require('./lib/taskModel')(db);

var taskRoutes = require('./lib/taskRoutes')(taskModel);

app.use(express.bodyParser());

app.get('/tasks', taskRoutes.getAll);

app.get('/tasks/:id', taskRoutes.getById);

app.post('/tasks', taskRoutes.add);

app.listen(3000);
