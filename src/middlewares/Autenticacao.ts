import { Request, Response, NextFunction }  from 'express';

import ConfigJWT from '../config/Autenticacao';
import { verify } from 'jsonwebtoken';

import appError from '../errors/appError';
import AppError from '../errors/appError';

interface TokenPayLoad {
   iat: number;
   exp: number;
   sub: string;
}

export default function Autenticacao(request: Request, response: Response, next: NextFunction): void{

   const TokenJWT = request.headers.authorization;

   if(!TokenJWT)
   {
      throw new appError('Token JWT não encontrado.', 401);

   }

   const [, token] = TokenJWT.split(' ');

   const { secret } = ConfigJWT.jwt;

   try {

      const decoded = verify(token, secret);

      const { sub } = decoded as TokenPayLoad;

      request.usuario = {
         id:sub,
      };

      return next();

   } catch {

      throw new AppError( 'Token JWT inválido.', 401);

   }

}

