import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { config } from '../configs/config';

import { IAuthRoleAttributes, IAuthRoleInstance } from './auth-role';
import { IAuthUserAttributes, IAuthUserInstance } from './auth-user';
import { IAuthUserRoleAttributes, IAuthUserRoleInstance } from './auth-user-role';

export interface IDbConnection {
  AuthUser: Sequelize.Model<IAuthUserInstance, IAuthUserAttributes>;
  AuthRole: Sequelize.Model<IAuthRoleInstance, IAuthRoleAttributes>;
  AuthUserRole: Sequelize.Model<IAuthUserRoleInstance, IAuthUserRoleAttributes>;
}

const env = process.env.NODE_ENV || 'development';
const configSequelize = config.sequelize[env];
const sequelize = new Sequelize(configSequelize.database, configSequelize.username, configSequelize.password, configSequelize);
const db: any = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== path.basename(module.filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model: any = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export const models: IDbConnection = db;
