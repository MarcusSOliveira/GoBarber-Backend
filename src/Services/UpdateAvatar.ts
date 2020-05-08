import {getRepository} from 'typeorm';
import path from 'path';

import usuarios from '../model/UsuariosModel';
import uploadConfig from '../config/upload';

import appErro from '../errors/appError';

import fs from 'fs';

interface Request {
   usuario_id : string;
   avatarFileName : string;
}

class UpdateAvatarService {
   public async execute({ usuario_id, avatarFileName } : Request ): Promise<usuarios> {
      const usuarioRepositorio = getRepository(usuarios);

      const usuario = await usuarioRepositorio.findOne(usuario_id);

      if (!usuario){
         throw new appErro('Faça o login para alterar a foto de perfil', 401);
      }

      if ( usuario.avatar){
         const PathAvatar = path.join(uploadConfig.directory, usuario.avatar);
         const PathAvatarExiste = await fs.promises.stat(PathAvatar);

         if (PathAvatarExiste){
            await fs.promises.unlink(PathAvatar);
         }
      }

      usuario.avatar = avatarFileName;

      await usuarioRepositorio.save(usuario);

      return usuario;

   }

}

export default UpdateAvatarService;