import { Router } from 'express';

import AgendamentosRouts from './Agendamento.route';

const routes = Router();

routes.use('/agendamentos', AgendamentosRouts)


routes.get('/teste', (request, response) => response.json({message: 'Hello Tes - 3333'}));

export default routes;
