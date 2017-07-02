import { DataTypes, QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  /*
   Add altering commands here.
   Return a promise to correctly handle asynchronicity.

   Example:
   return queryInterface.bulkInsert('Person', [{
   name: 'John Doe',
   isBetaMember: false
   }], {});
   */
};

export const down = (queryInterface: QueryInterface, dataTypes: DataTypes) => {
  /*
   Add reverting commands here.
   Return a promise to correctly handle asynchronicity.

   Example:
   return queryInterface.bulkDelete('Person', null, {});
   */
};
