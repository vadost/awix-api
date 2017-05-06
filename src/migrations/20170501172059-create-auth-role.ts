import { DataTypes, QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  return queryInterface.createTable('AuthRoles', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  });
};

export const down = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  return queryInterface.dropTable('AuthRoles');
};
