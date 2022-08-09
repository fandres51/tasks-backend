const { Model, DataTypes } = require('sequelize');
const { CLASS_TABLE } = require('./class.model');

const TASK_TABLE = 'task';

const TaskSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        default: '',
        type: DataTypes.TEXT,
    },
    dueDate: {
        allowNull: false,
        field: 'due_date',
        type: DataTypes.DATE,
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
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

class Task extends Model {
    static associate() {
        this.belongsTo(models.Class, { as: 'class' });
        this.belongsToMany(models.User, {
            as: 'users',
            through: models.UserTask,
            foreignKey: 'taskId',
            otherKey: 'userId',
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false,
        };
    }
}

module.exports = { TASK_TABLE, TaskSchema, Task };
