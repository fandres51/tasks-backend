const { Model, DataTypes } = require('sequelize');
const { TASK_TABLE } = require('./task.model');
const { USER_TABLE } = require('./user.model');

const USER_TASK_TABLE = 'user_task';

const UserTaskSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
    },
    completed: {
        allowNull: false,
        default: false,
        type: DataTypes.BOOLEAN,
    },
    color: {
        allowNull: false,
        default: '#032cfc',
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
    taskId: {
        field: 'task_id',
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: TASK_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
};

class UserTask extends Model {
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TASK_TABLE,
            modelName: 'UserTask',
            timestamps: false,
        };
    }
}

module.exports = { USER_TASK_TABLE, UserTaskSchema, UserTask };
