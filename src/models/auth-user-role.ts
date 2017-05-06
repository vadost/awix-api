import { DataTypes, Instance, Sequelize } from 'sequelize';

export interface IAuthUserRoleAttributes {
  userUuid: string;
  roleId: string;
}

export interface IAuthUserRoleInstance extends Instance<IAuthUserRoleAttributes> {
  userUuid: number;
  roleId: string;
  createdAt: Date;
}

const authUserRoleModel = (sequelize: Sequelize, dataTypes: DataTypes) => {
  return sequelize.define('AuthUserRole', {
    userUuid: {
      type: dataTypes.UUID,
      allowNull: false,
      references: {
        model: 'AuthUsers',
        key: 'uuid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      validate: {
        isUUID: 4,
      },
    },
    roleId: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AuthRoles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      validate: {
        isInt: true,
      },
    },
  });
};

export default authUserRoleModel;
