import { IConfig } from './types/i-config.interface';

export const config: IConfig = {
  jwt: {
    secret: '123456',
    tokenTime: '30m',
  },

  sequelize: {
    production: {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_production',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
    development: {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      host: 'postgres',
      dialect: 'postgres',
    },
    testing: {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_testing',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
  },
};
