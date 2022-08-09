'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { ClassSchema, CLASS_TABLE } = require('./../models/class.model');
const { TaskSchema, TASK_TABLE } = require('./../models/task.model');
const { UserClassSchema, USER_CLASS_TABLE } = require('./../models/user-class.model');
const { UserTaskSchema, USER_TASK_TABLE } = require('./../models/user-task.model');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(USER_TABLE, UserSchema);
        await queryInterface.createTable(CLASS_TABLE, ClassSchema);
        await queryInterface.createTable(TASK_TABLE, TaskSchema);
        await queryInterface.createTable(USER_CLASS_TABLE, UserClassSchema);
        await queryInterface.createTable(USER_TASK_TABLE, UserTaskSchema);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable(USER_TASK_TABLE);
        await queryInterface.dropTable(USER_CLASS_TABLE);
        await queryInterface.dropTable(TASK_TABLE);
        await queryInterface.dropTable(CLASS_TABLE);
        await queryInterface.dropTable(USER_TABLE);
    },
};
