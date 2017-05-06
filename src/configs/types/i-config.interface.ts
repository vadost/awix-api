export interface IConfig {
  jwt: {
    secret: string;
    tokenTime: string;
  };

  sequelize: {
    [key: string]: {
      username: string,
      password: string,
      database: string,
      host: string,
      dialect: string,
    };
  };
}
