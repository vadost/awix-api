import { models } from './index';

models.sequelize.sync({force: true, logging: console.log}).then(() => {
  const env = process.env.NODE_ENV || 'development';
  console.log(`SYNC DB DONE, env "${env}"`);
});
