import Agendamento from '../model/AgendamentoModel';
import { getCustomRepository } from 'typeorm';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import { startOfHour } from 'date-fns';

interface RequestDTO {
   data: Date;
   provider_id: 'uuid';
}
class CreateAgendamentoService
{
   public async execute({ data, provider_id } : RequestDTO ) : Promise<Agendamento> {
      const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio);

      const dataCorrigida = startOfHour(data);

      const EncontreAgendamento = await agendamentoRepositorio.findBydate(dataCorrigida);

      if (EncontreAgendamento) {
         throw Error('Agendamento já cadastrado.');
      };

      const agendamento = agendamentoRepositorio.create({ provider_id, data: dataCorrigida });

      await agendamentoRepositorio.save(agendamento);

      return agendamento;

   }

}

export default CreateAgendamentoService;
