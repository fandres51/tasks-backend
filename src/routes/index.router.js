const usersRouter = require('./users.router');
const classesRouter = require('./classes.router');
const tasksRouter = require('./tasks.router');

function routerApi(app) {
    app.use('/users', usersRouter);
    app.use('/classes', classesRouter);
    app.use('/tasks', tasksRouter);
}

module.exports = routerApi;
