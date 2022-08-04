const express = require('express');
const UserService = require('./../services/user');

const userRoutes = express.Router();
const service = new UserService();

module.exports = userRoutes;
