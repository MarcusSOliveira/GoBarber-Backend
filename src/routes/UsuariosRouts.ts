import { Router, response } from 'express';
import autenticacao from '../middlewares/Autenticacao';
import createUsuarioService from '../Services/CreateUsuarios';
import multer from 'multer';
import uploadConfig from '../config/upload';
import avatarService from '../Services/UpdateAvatar';

const UsuariosRouts = Router();
const upload = multer(uploadConfig);


UsuariosRouts.post('/', async (request, response) => {

   const { Nome, email, password } = request.body;

   const createUsuario = new createUsuarioService();

   const usuario = await createUsuario.execute({
      Nome, email, password
   });

   delete usuario.password;

   return response.json(usuario);
   
});

UsuariosRouts.patch('/avatar', autenticacao, upload.single('avatar'),
async(request, response) => {

   const updateAvatar = new avatarService();

   const usuario = await updateAvatar.execute({
      usuario_id: request.usuario.id,
      avatarFileName: request.file.filename
   })

   delete usuario.password;
   return response.json(usuario);

})
// UsuariosRouts.get('/', async (request, response) => {

//    const agendamentoRepositorio = getCustomRepository(Repositorio);
//    const findAgendamento = await agendamentoRepositorio.find();

//    return response.json(findAgendamento);
// })


export default UsuariosRouts;
