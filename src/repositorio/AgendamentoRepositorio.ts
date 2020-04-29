import Agendamento from '../model/AgendamentoModel';
import { isEqual } from 'date-fns';

interface CreateAgendamentoDTO {
   provider: string;
   data: Date;
}
class AgendamentoRepositorio {
   private agendamentos: Agendamento[];

   constructor( ) {
      this.agendamentos = [];
   }

   public all(): Agendamento[] {
      return this.agendamentos;
   }

   public findBydate(data: Date): Agendamento | null {
      const EncontreAgendamento = this.agendamentos.find( agendamento =>
         isEqual(data, agendamento.data ),
      );

      return EncontreAgendamento || null;
   }

   public create({ provider, data }: CreateAgendamentoDTO ) : Agendamento {
      const agendamento = new Agendamento({ provider, data });

      this.agendamentos.push(agendamento);

      return agendamento;
   }

}

export default AgendamentoRepositorio;
