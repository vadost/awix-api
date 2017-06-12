import { IConfig } from './types/i-config.interface';

export const config: IConfig = {
  jwt: {
    secret: process.env.SECRET,
    tokenTime: '30m',
  },

  sequelize: {
    production: {
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'awix_production',
      host: 'postgres',
      dialect: 'postgres',
    },
    development: {
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'awix_development',
      host: 'postgres',
      dialect: 'postgres',
    },
  },
};
