import Agendamento from '../model/AgendamentoModel';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Agendamento)
class AgendamentoRepositorio extends Repository<Agendamento> {

   public async findBydate(data: Date, provider_id: string): Promise<Agendamento | null> {
      const EncontreAgendamento = await this.findOne({
         where: {provider_id, data},
      });

      return EncontreAgendamento || null;
   }

}

export default AgendamentoRepositorio;
