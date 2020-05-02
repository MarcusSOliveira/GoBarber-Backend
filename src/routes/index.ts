import { Router } from 'express';

import AgendamentosRouts from './AgendamentoRouts';
import UsuariosRouts from './UsuariosRouts';

const routes = Router();

routes.use('/agendamentos', AgendamentosRouts)
routes.use('/usuarios', UsuariosRouts)

export default routes;
