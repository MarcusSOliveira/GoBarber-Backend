import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import CreateAgendamentoService from '../Services/CreateAgendamento';
import autentica from '../middlewares/Autenticacao';

const AgendamentosRouts = Router();

AgendamentosRouts.use(autentica);

AgendamentosRouts.get('/', async (request, response) => {
   const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio);
   const findAgendamento = await agendamentoRepositorio.find();

   return response.json(findAgendamento);
})

AgendamentosRouts.post ('/', async (request, response)  => {

   const { data, provider_id } = request.body;

   const SetarData = parseISO(data);

   const CreateAgendamento = new CreateAgendamentoService();

   const agendamento = await CreateAgendamento.execute({ data: SetarData, provider_id });

   return response.json(agendamento);

});

export default AgendamentosRouts;
