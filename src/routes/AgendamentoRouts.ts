import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import CreateAgendamentoService from '../Services/CreateAgendamento';

const AgendamentosRouts = Router();


AgendamentosRouts.get('/', async (request, response) => {

   const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio);

   const findAgenagedamento = await agendamentoRepositorio.find();

   return response.json(findAgenagedamento);
})

AgendamentosRouts.post('/', async (request, response) => {
   try
   {

      const { provider_id, data } = request.body;

      const SetarData = parseISO(data);

      const CreateAgendamento = new CreateAgendamentoService();

      const agendamento = await CreateAgendamento.execute({ data: SetarData, provider_id });

      return response.json({agendamento});

   }  catch (err) {
      return response.status(400).json({error: err.message});
   }


});

export default AgendamentosRouts;
