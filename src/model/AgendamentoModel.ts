import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import Usuario from './UsuariosModel';

@Entity('Agendamento')
class Agendamento {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   provider_id : string;

   @ManyToOne(()=> Usuario)
   @JoinColumn({ name: 'provider_id'})
   provider: Usuario;

   @Column('timestamp with time zone')
   data: Date;

   @CreateDateColumn()
   CriadoEm : Date;

   @UpdateDateColumn()
   AtualizadoEm: Date;

}

export default Agendamento;

