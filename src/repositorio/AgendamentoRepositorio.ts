import Agendamento from '../model/AgendamentoModel';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Agendamento)
class AgendamentoRepositorio extends Repository<Agendamento> {

   public async findBydate(data: Date): Promise<Agendamento | null> {
      const EncontreAgendamento = await this.findOne({
         where: {data},
      });

      return EncontreAgendamento || null;
   }

}

export default AgendamentoRepositorio;
