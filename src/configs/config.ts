import { IConfig } from './types/i-config.interface';

export const config: IConfig = {
  jwt: {
    secret: process.env.SECRET || 'secret',
    tokenTime: '30m',
  },

  sequelize: {
    production: {
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: 'awix_production',
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      dialect: 'postgres',
    },
    development: {
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: 'awix_development',
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      dialect: 'postgres',
    },
  },
};
