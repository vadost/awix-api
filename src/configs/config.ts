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
      host: 'postgres',
      dialect: 'postgres',
    },
    development: {
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: 'awix_development',
      host: 'postgres',
      dialect: 'postgres',
    },
  },
};
