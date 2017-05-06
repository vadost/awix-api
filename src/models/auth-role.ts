import { DataTypes, Instance, Sequelize } from 'sequelize';

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
  return sequelize.define('AuthRole', {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
  });
};

export default authRoleModel;
