import {uuid} from 'uuidv4'

class Agendamento {
   id: string;

   provider : string;

   data: Date;

   constructor({ provider, data }: Omit<Agendamento,'id'>) {
      this.id = uuid();
      this.provider = provider;
      this.data = data;
   }
}

export default Agendamento;

