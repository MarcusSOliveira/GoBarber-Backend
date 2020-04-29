import Agendamento from '../model/AgendamentoModel';
import AgendamentoRepositorio from '../repositorio/AgendamentoRepositorio';
import { startOfHour } from 'date-fns';

interface RequestDTO {
   data: Date;
   provider: string;
}
class CreateAgendamentoService
{
   private agendamentoRepositorio: AgendamentoRepositorio;

   constructor(agendamentoRepositorio: AgendamentoRepositorio){
      this.agendamentoRepositorio = agendamentoRepositorio;

   }
   public execute({ data, provider } : RequestDTO ) : Agendamento {

      const dataCorrigida = startOfHour(data);

      const EncontreAgendamento = this.agendamentoRepositorio.findBydate(dataCorrigida);

      if (EncontreAgendamento) {
         throw Error('Agendamento já cadastrado.');
      };

      const agendamento = this.agendamentoRepositorio.create({ provider, data: dataCorrigida });

      return agendamento;


   }

}

export default CreateAgendamentoService;
