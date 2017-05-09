import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { IConfig } from '../configs/types/i-config.interface';
import { ITokenData } from '../middlewares/jwt-auth';
import { IAuthUserInstance } from '../models/auth-user';
import { IDbConnection } from '../models/index';

const sendAuthData = (res: Response, authUser: IAuthUserInstance, config: IConfig): void => {
  const tokenData: ITokenData = {
    uuid: authUser.uuid,
  };

  const token: string = sign(tokenData, config.jwt.secret, {
    expiresIn: config.jwt.tokenTime,
  });

  res.json({
    message: 'Authentication succeeded.',
    loginToken: authUser.loginToken,
    token,
  });
};

export const authenticateController = {
  /**
   * Authenticate
   * post
   * req.body.email
   * req.body.password
   */
  authenticateAction: (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body.email) {
      res.status(401).json({
        message: 'No email provided.',
      });
      return;
    }

    if (!req.body.password) {
      res.status(401).json({
        message: 'No password provided.',
      });
      return;
    }

    const config: IConfig = req.app.get('config');
    const models: IDbConnection = req.app.get('models');

    models.AuthUser
      .findOne({where: {email: req.body.email}})
      .then((authUser: IAuthUserInstance) => {
        if (!authUser) {
          res.status(401).json({
            message: 'Authentication failed. User not found.',
          });
          return;
        }

        if (authUser.password !== req.body.password) {
          res.status(401).json({
            message: 'Authentication failed. Wrong password.',
          });
        } else {
          sendAuthData(res, authUser, config);
        }
      })
      .catch((error: any) => res.status(400).json(error));
  },

  /**
   * Authenticate token
   * post
   * req.body.loginToken
   */
  authenticateTokenAction: (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body.loginToken) {
      res.status(401).json({
        message: 'No loginToken provided.',
      });
      return;
    }

    const config: IConfig = req.app.get('config');
    const models: IDbConnection = req.app.get('models');

    models.AuthUser
      .findOne({where: {loginToken: req.body.loginToken}})
      .then((authUser: IAuthUserInstance) => {
        if (!authUser) {
          res.status(401).json({
            message: 'Authentication failed. User not found.',
          });
          return;
        }

        sendAuthData(res, authUser, config);
      })
      .catch((error: any) => res.status(400).json(error));
  },
};
