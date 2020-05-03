import { Router } from 'express';

import AgendamentosRouts from './AgendamentoRouts';
import UsuariosRouts from './UsuariosRouts';
import SessionRouts from './SessionRouts';

const routes = Router();

routes.use('/agendamentos', AgendamentosRouts)
routes.use('/usuarios', UsuariosRouts)
routes.use('/session', SessionRouts)

export default routes;
