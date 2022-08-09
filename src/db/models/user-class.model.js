const { Model, DataTypes } = require('sequelize');
const { CLASS_TABLE } = require('./class.model');
const { USER_TABLE } = require('./user.model');

const USER_CLASS_TABLE = 'user_class';

const UserClassSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
    },
    relation: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: USER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    classId: {
        field: 'class_id',
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: CLASS_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
};

class UserClass extends Model {
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_CLASS_TABLE,
            modelName: 'UserClass',
            timestamps: false,
        };
    }
}

module.exports = { USER_CLASS_TABLE, UserClassSchema, UserClass };
