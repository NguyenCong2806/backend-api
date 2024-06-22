/* eslint-disable prettier/prettier */
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NestMiddleware, Injectable } from '@nestjs/common';
export const SECRET_KEY: Secret = process.env.JWT_SECRET;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        return res.status(403).send({
          error: true,
          message: 'No token provided.',
        });
      } else {
        jwt.verify(token, SECRET_KEY, function (err, decoded) {
          if (err) {
            console.error(err.toString());
            //if (err) throw new Error(err)
            return res
              .status(401)
              .json({ error: true, message: 'Unauthorized access.', err });
          }
          console.log(`decoded>>${decoded}`);
          (req as CustomRequest).token = decoded;

          next();
        });
      }
    } catch (err) {
      res.status(401).send('Please authenticate');
    }
  }
}
