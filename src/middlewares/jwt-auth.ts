import { NextFunction, Request, RequestHandler, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IConfig } from '../configs/types/i-config.interface';

export interface ITokenData {
  uuid: string;
  exp?: number; // Expiration Time
  iat?: number; // Issued At (Date.now()/1000)
}

export interface IRequestDecoded extends Request {
  decoded: ITokenData;
}

export const jwtAuth: RequestHandler = (req: IRequestDecoded, res: Response, next: NextFunction): void => {
  const token: string = req.body.token || req.query.token;
  const config: IConfig = req.app.get('config');

  if (!token) {
    res.status(403).json({
      error: 'No token provided.',
    });
    return;
  }

  verify(token, config.jwt.secret, (err: Error, decoded: ITokenData) => {
    if (err) {
      res.status(401).json({
        error: 'Failed to authenticate token.',
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};
