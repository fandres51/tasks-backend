const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
// const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {}

//     async create(user) {
//         const newUser = {
//             id: nanoid(),
//             email: user.email,
//             username: user.username,
//             password: bcrypt.hashSync(user.password, 10),
//             type: user.type
//         }

//     }

//     async getById(id) {

//     }

//     async update(userParam, ...params, id) {

//     }

//     async deleete(id) {

//     }
}

module.exports = UserService;
//create a user                                 post
//view his info                                 get
//change username, email or pass                patch
//delete his account                            delete
