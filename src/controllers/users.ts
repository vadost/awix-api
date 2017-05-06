import { NextFunction, Request, Response } from 'express';
import { generateLoginToken } from '../helpers/generate-login-token';
import { IAuthUserAttributes, IAuthUserInstance } from '../models/auth-user';
import { IDbConnection } from '../models/index';

class UsersController {
  public getUsersAction(req: Request, res: Response, next: NextFunction) {
    const models: IDbConnection = req.app.get('models');

    return models.AuthUser
      .all()
      .then((authUsers: IAuthUserInstance[]) => res.status(200).json(authUsers))
      .catch((error: any) => res.status(400).json(error));
  }

  public getUserAction(req: Request, res: Response, next: NextFunction) {
    const models: IDbConnection = req.app.get('models');

    return models.AuthUser
      .findByPrimary(req.params.uuid)
      .then((authUser: IAuthUserInstance) => res.status(200).json(authUser))
      .catch((error: any) => res.status(400).json(error));
  }

  public createUserAction(req: Request, res: Response, next: NextFunction) {
    if (typeof req.body.email === 'undefined') {
      return res.status(400).json({
        message: 'No email provided.',
      });
    }

    if (typeof req.body.password === 'undefined') {
      return res.status(400).json({
        message: 'No password provided.',
      });
    }

    const models: IDbConnection = req.app.get('models');

    const newAuthUser: IAuthUserAttributes = {
      loginToken: generateLoginToken(),
      email: req.body.email,
      password: req.body.password,
    };

    return models.AuthUser
      .create(newAuthUser)
      .then((authUser: IAuthUserInstance) => res.status(201).json(authUser))
      .catch((error: any) => res.status(400).json(error));
  }
}

export const usersController = new UsersController();
