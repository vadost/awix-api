import { IConfig } from './types/i-config.interface';

export const config: IConfig = {
  jwt: {
    secret: '123456',
    tokenTime: '30m',
  },

  sequelize: {
    development: {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_development',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
    production: {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_production',
      host: '127.0.0.1',
      dialect: 'postgres',
    },
  },
};
