const { User, UserSchema } = require('./user.model');
//other imports

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    //other models
}

module.exports = setupModels;
