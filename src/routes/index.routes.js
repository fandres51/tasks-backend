const express = require('express');
const usersRoutes = require('./user.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRoutes);
}

module.exports = routerApi;
