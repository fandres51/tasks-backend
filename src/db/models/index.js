const { User, UserSchema } = require('./user.model');
const { Class, ClassSchema } = require('./class.model');
const { Task, TaskSchema } = require('./task.model');
const { UserClass, UserClassSchema } = require('./user-class.model');
const { UserTask, UserTaskSchema } = require('./user-task.model');
//other importss

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Class.init(ClassSchema, Class.config(sequelize));
    Task.init(TaskSchema, Task.config(sequelize));
    UserClass.init(UserClassSchema, UserClass.config(sequelize));
    UserTask.init(UserTaskSchema, UserTask.config(sequelize));

    User.associate(sequelize.models);
    Class.associate(sequelize.models);
    Task.associate(sequelize.models);
}

module.exports = setupModels;
