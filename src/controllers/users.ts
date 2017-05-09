import { NextFunction, Request, Response } from 'express';
import { generateLoginToken } from '../helpers/generate-login-token';
import { IAuthUserAttributes, IAuthUserInstance } from '../models/auth-user';
import { IDbConnection } from '../models/index';

export const usersController = {
  getUsersAction: (req: Request, res: Response, next: NextFunction): void => {
    const models: IDbConnection = req.app.get('models');

    models.AuthUser
      .all()
      .then((authUsers: IAuthUserInstance[]) => res.status(200).json(authUsers))
      .catch((error: any) => res.status(400).json(error));
  },

  getUserAction: (req: Request, res: Response, next: NextFunction): void => {
    const models: IDbConnection = req.app.get('models');

    models.AuthUser
      .findByPrimary(req.params.uuid)
      .then((authUser: IAuthUserInstance) => res.status(200).json(authUser))
      .catch((error: any) => res.status(400).json(error));
  },

  createUserAction: (req: Request, res: Response, next: NextFunction): void => {
    if (typeof req.body.email === 'undefined') {
      res.status(400).json({
        message: 'No email provided.',
      });
      return;
    }

    if (typeof req.body.password === 'undefined') {
      res.status(400).json({
        message: 'No password provided.',
      });
      return;
    }

    const models: IDbConnection = req.app.get('models');

    const newAuthUser: IAuthUserAttributes = {
      loginToken: generateLoginToken(),
      email: req.body.email,
      password: req.body.password,
    };

    models.AuthUser
      .create(newAuthUser)
      .then((authUser: IAuthUserInstance) => res.status(201).json(authUser))
      .catch((error: any) => res.status(400).json(error));
  },
};
