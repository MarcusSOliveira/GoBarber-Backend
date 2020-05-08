import { Router } from 'express';
import Session from '../Services/Session';

const sessionRouts = Router();

sessionRouts.post('/', async (request, response) => {
   
   const { email, password } = request.body;

   const autenticacaoUsuario = new Session();

   const {usuario, token } = await autenticacaoUsuario.execute({
      email,
      password
   });

   delete usuario.password;

   return response.json({usuario, token});


})

export default sessionRouts;
