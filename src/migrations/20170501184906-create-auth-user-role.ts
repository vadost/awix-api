import { DataTypes, QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  return queryInterface.createTable('AuthUserRoles', {
    userUuid: {
      type: dataTypes.UUID,
      allowNull: false,
      references: {
        model: 'AuthUsers',
        key: 'uuid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  });
};

export const down = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  return queryInterface.dropTable('AuthUserRoles');
};
