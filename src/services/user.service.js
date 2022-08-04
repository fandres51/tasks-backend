const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
const { v4: uuidv4 } = require('uuid');

class UserService {
    constructor() {}

    async create(user) {
        const newUser = {
            id: uuidv4(),
            email: user.email,
            username: user.username,
            password: bcrypt.hashSync(user.password, 10),
            type: user.type,
        };
        const resNewUser = await models.User.create(newUser);
        return resNewUser;
    }

    async getAll() {
        const res = await models.User.findAll();
        return res;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if(!user) {
            throw boom.notFound('User not found');
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const res = await user.update(changes);
        return res;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
//create a user                                 post
//view his info                                 get
//get                                 get
//change username, email or pass                patch
//delete his account                            delete
