import { DataTypes, Instance, Sequelize } from 'sequelize';
import { IDbConnection } from './index';

export interface IAuthUserAttributes {
  email: string;
  password: string;
  loginToken: string;
  lastVisit?: Date;
}

export interface IAuthUserInstance extends Instance<IAuthUserAttributes> {
  uuid: string;
  email: string;
  password: string;
  loginToken: string;
  lastVisit: Date;
  createdAt: Date;
  updatedAt: Date;
}

const authUserModel = (sequelize: Sequelize, dataTypes: DataTypes) => {
  const AuthUser = sequelize.define('AuthUser', {
    uuid: {
      type: dataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: dataTypes.UUIDV4,
    },
    email: {
      type: dataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        isLowercase: true,
        len: [1, 255],
      },
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
      },
    },
    loginToken: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [32, 255],
      },
    },
    lastVisit: {
      type: dataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  }, {
    classMethods: {
      associate: (models: IDbConnection) => {
        AuthUser.belongsToMany(models.AuthRole, {
          through: 'AuthUserRoles',
          onDelete: 'CASCADE',
        });
      },
    },
  });

  return AuthUser;
};

export default authUserModel;
