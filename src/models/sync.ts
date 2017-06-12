import { models } from './index';

models.sequelize.sync({force: true, logging: console.log}).then(() => {
  console.log(`SYNC DB DONE, env "${process.env.NODE_ENV}"`);
});
