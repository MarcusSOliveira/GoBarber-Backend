import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Agendamento from '../model/AgendamentoModel';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';

import appErro from '../errors/appError';

interface RequestDTO {
   data: Date;
   provider_id: string;
}
class CreateAgendamentoService
{
   public async execute({ data, provider_id } : RequestDTO ) : Promise<Agendamento> {

      const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio);

      const dataCorrigida = startOfHour(data);

      const EncontreAgendamento = await agendamentoRepositorio.findBydate(dataCorrigida, provider_id);

      if (EncontreAgendamento) {
         throw new appErro('Agendamento já cadastrado.');
      };

      const agendamento = agendamentoRepositorio.create({ provider_id, data: dataCorrigida });

      await agendamentoRepositorio.save(agendamento);

      return agendamento;

   }

}

export default CreateAgendamentoService;
