import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import CreateAgendamentoService from '../Services/CreateAgendamento';

const AgendamentosRouts = Router();


AgendamentosRouts.get('/', async (request, response) => {

   const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio);
   const findAgendamento = await agendamentoRepositorio.find();

   return response.json(findAgendamento);
})

AgendamentosRouts.post('/', async (request, response) => {
   try
   {
      const { data, provider_id } = request.body;

      //const provider_id = "9a008370-cb7c-400c-8f22-a161adda7399";

      const SetarData = parseISO(data);

      const CreateAgendamento = new CreateAgendamentoService();

      const agendamento = await CreateAgendamento.execute({ data: SetarData, provider_id });

      return response.json(agendamento);

   }  catch (err) {
      return response.status(400).json({error: err.message});
   }


});

export default AgendamentosRouts;
