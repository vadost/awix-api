import { DataTypes, Instance, Sequelize } from 'sequelize';
import { IDbConnection } from './index';

export interface IAuthRoleAttributes {
  name: string;
}

export interface IAuthRoleInstance extends Instance<IAuthRoleAttributes> {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const authRoleModel = (sequelize: Sequelize, dataTypes: DataTypes) => {
  const AuthRole = sequelize.define('AuthRole', {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
  }, {
    classMethods: {
      associate: (models: IDbConnection) => {
        AuthRole.belongsToMany(models.AuthUser, {
          through: 'AuthUserRoles',
          onDelete: 'CASCADE',
        });
      },
    },
  });

  return AuthRole;
};

export default authRoleModel;
