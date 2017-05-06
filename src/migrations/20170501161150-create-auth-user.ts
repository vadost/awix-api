import { DataTypes, QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  return queryInterface.createTable('AuthUsers', {
    uuid: {
      type: dataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    loginToken: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastVisit: {
      type: dataTypes.DATE,
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
  return queryInterface.dropTable('AuthUsers');
};
