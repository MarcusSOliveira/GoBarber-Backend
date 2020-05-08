import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Usuario from '../model/UsuariosModel';
import appErro from '../errors/appError';

interface Request {
   Nome: string;
   email: string;
   password: string;
}

class CreateUsuarioService {
   public async execute({ Nome, email, password }: Request): Promise<Usuario>{
      const usuariosRepositorios = getRepository(Usuario);

      const emailJaCriado = await usuariosRepositorios.findOne({
         where: { email },
      });

      if (emailJaCriado) {
         throw new appErro('Email já está em uso.');
      }

      const hashPassword = await hash(password, 8);

      const usuario = usuariosRepositorios.create({
         Nome, email,
         password : hashPassword
      });

      await usuariosRepositorios.save(usuario);

      return usuario ;

   }

}

export default CreateUsuarioService;
