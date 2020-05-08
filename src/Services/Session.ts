import {getRepository} from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Usuarios from '../model/UsuariosModel';
import ConfigToken from '../config/Autenticacao';
import appErro from '../errors/appError';

interface Request{
   email: string;
   password: string;
}

interface Response{
   usuario: Usuarios;
   token: string;
}

class SessionService{
   public async execute({ email, password}: Request):Promise<Response>{
      const UsuariosRepository = getRepository(Usuarios);

      const usuario = await UsuariosRepository.findOne({ where: {email}});

      if (!usuario) {
         throw new appErro('Autenticação falhou!', 401);
      }

      const ValidarPassword =  await compare(password, usuario.password);

      if(!ValidarPassword){
         throw new appErro('Autenticação falhou!', 401);
      }

      const { secret, expiresIn } = ConfigToken.jwt;

      const token = sign({}, secret, {
         subject: usuario.id,
         expiresIn: expiresIn
      });
      return{
         usuario,
         token,
      };


   }

};

export default SessionService;
