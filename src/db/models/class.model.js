const { Model, DataTypes } = require('sequelize');

const CLASS_TABLE = 'class';

const ClassSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
    },
    code: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    type: {
        allowNull: false,
        default: 'TODO',
        type: DataTypes.STRING,
    },
};

class Class extends Model {
    static associate() {
        this.hasMany(models.Task, {
            as: 'task',
            foreignKey: 'classId',
        });
        this.belongsToMany(models.User, {
            as: 'users',
            through: models.UserClass,
            foreignKey: 'classId',
            otherKey: 'userId',
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CLASS_TABLE,
            modelName: 'Class',
            timestamps: false,
        };
    }
}

module.exports = { CLASS_TABLE, ClassSchema, Class };
