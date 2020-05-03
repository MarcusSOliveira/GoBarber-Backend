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

      delete usuario.password;

      return response.json(usuario);
   }  catch (err) {
      return response.status(400).json({error: err.message});
   }


});

// UsuariosRouts.get('/', async (request, response) => {

//    const agendamentoRepositorio = getCustomRepository(usRepositorio);
//    const findAgendamento = await agendamentoRepositorio.find();

//    return response.json(findAgendamento);
// })


export default UsuariosRouts;
