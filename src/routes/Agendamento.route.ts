import { Router } from 'express';
import { parseISO } from 'date-fns';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import CreateAgendamentoService from '../Services/CreateAgendamento';

const AgendamentosRouts = Router();
const agendamentoRepositorio = new AgendamentoRepositorio();

AgendamentosRouts.get('/', (request, response) => {
   const findAgendamento = agendamentoRepositorio.all();

   return response.json(findAgendamento);
})

AgendamentosRouts.post('/', (request, response) => {
   try
   {

      const provider = "Marcus"; const data = '2020-04-29T21:16:18.364Z' ;

      const SetarData = parseISO(data);

      const CreateAgendamento = new CreateAgendamentoService(agendamentoRepositorio);

      const agendamento = CreateAgendamento.execute({ data: SetarData, provider });

      return response.json({agendamento});


   }  catch (err) {
      return response.status(400).json({error: err.message});
   }


});

export default AgendamentosRouts;
