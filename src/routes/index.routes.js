const usersRoutes = require('./user.routes');

function routerApi(app) {
    app.use('/users', usersRoutes);
}

module.exports = routerApi;
