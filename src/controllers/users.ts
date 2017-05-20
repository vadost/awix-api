import { NextFunction, Response } from 'express';
import { IRequestDecoded } from '../middlewares/jwt-auth';
import { IAuthUserInstance } from '../models/auth-user';
import { IDbConnection } from '../models/index';

export const usersController = {
  /**
   * Get current user data
   * get
   */
  getMeAction: (req: IRequestDecoded, res: Response, next: NextFunction): void => {
    const models: IDbConnection = req.app.get('models');

    models.AuthUser
      // .findByPrimary(req.decoded.uuid)
      .findOne({
        where: {uuid: req.decoded.uuid},
        attributes: ['uuid', 'email', 'lastVisit'],
      })
      .then((authUser: IAuthUserInstance) => res.status(200).json(authUser))
      .catch((error: any) => res.status(400).json(error));
  },
};
