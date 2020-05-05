import {getRepository} from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Usuarios from '../model/UsuariosModel';

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
         throw new Error('Autenticação falhou!');
      }

      const ValidarPassword =  await compare(password, usuario.password);

      if(!ValidarPassword){
         throw new Error('Autenticação falhou!');
      }

      const token = sign({  }, '*(&%&$$#%$#$%ÏOGYUFYFY', {
         subject: usuario.id,
         expiresIn: '20M'
      });
      return{
         usuario,
         token,
      };


   }

};

export default SessionService;
