import { Router } from 'express';
import createUsuarioService from '../Services/CreateUsuarios';

const UsuariosRouts = Router();

UsuariosRouts.post('/', async (request, response) => {
   try
   {
      const { Nome, email, password } = request.body;

      const createUsuario = new createUsuarioService();

      const usuario = await createUsuario.execute({
         Nome, email, password
      });

      return response.json(usuario);
   }  catch (err) {
      return response.status(400).json({error: err.message});
   }


});

export default UsuariosRouts;
