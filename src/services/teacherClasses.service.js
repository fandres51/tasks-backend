const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
const { v4: uuidv4 } = require('uuid');

class TeacherClassService {
    constructor() {}

    async create(class_data) {
        const classIdUuid = uuidv4();
        const newClass = {
            id: classIdUuid,
            code: this.getClassCode(classIdUuid),
            name: class_data.name,
            type: 'active'
        }
        const resNewClass = await models.Class.create(newClass);
        const resRel = await this.createUserClass(class_data.userId, classIdUuid, class_data.relation);
        return resNewClass;
    }

    async createUserClass(userid, classid, relation) {
        const newUserClass = {
            id: uuidv4(),
            userId: userid,
            classId: classid,
            relation: relation
        }
        const resNewRel = await models.UserClass.create(newUserClass);
        return resNewRel;
    }

    // async viewAllClasses(teacher_id) {
    //     const res = await models.Class.findAll({
    //         where:  {

    //         }
    //     })
    // }
    //create class                                  post
    //view all his classes                          get
    //get the details of a class                    get
    //change class name                             patch
    //delete class                                  deleteF

    // async create(class) {
    //     const newUser = {
    //         id: uuidv4(),
    //         email: user.email,
    //         username: user.username,
    //         password: bcrypt.hashSync(user.password, 10),
    //         type: user.type,
    //     };
    //     const resNewUser = await models.User.create(newUser);
    //     return resNewUser;
    // }

    // async getAll() {
    //     const res = await models.User.findAll();
    //     return res;
    // }

    // async findOne(id) {
    //     const user = await models.User.findByPk(id);
    //     if(!user) {
    //         throw boom.notFound('User not found');
    //     }
    //     return user;
    // }

    // async update(id, changes) {
    //     const user = await this.findOne(id);
    //     const res = await user.update(changes);
    //     return res;
    // }

    // async delete(id) {
    //     const user = await this.findOne(id);
    //     await user.destroy();
    //     return { id };
    // }

    getClassCode(classIdUuid) {
        const classCodeArray = classId.split('-');
        return classCodeArray[0];
    }
}

module.exports = TeacherClassService;
