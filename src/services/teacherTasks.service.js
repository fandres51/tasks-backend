const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
const { v4: uuidv4 } = require('uuid');

class TeacherTaskService {
    constructor() {}

    async create(task_data) {
        const taskIdUuid = uuidv4();
        const newTask = {
            id: taskIdUuid,
            name: task_data.name,
            description: task_data.description,
            due_date: task_data.due,
            class: task_data.class
        }
        const resNewTask = await models.Task.create(newTask);
        const students = await models.UserClass.findAll({
            where: {
                relation: 'student',
                classId: task_data.class,
            },
        })
        students.forEach((student) => {
            const resRel = await this.createUserTask(task_data.userId, taskIdUuid, task_data.color);
        });
        return resNewTask;
    }

    async createUserTask(userid, taskid, relation) {
        const newUserTask = {
            id: uuidv4(),
            userId: userid,
            taskId: taskid,
            completed: 'false',
            color: color
        }
        const resNewRel = await models.UserTask.create(newUserTask);
        return resNewRel;
    }


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

module.exports = TeacherTaskService;


//create a new task for a class                 post
//get the tasks of a class                      get
//view details of a task                        get
//see the list of previous tasks of a class 	get
//update a field of a task                      patch
//delete a task                                 delete
