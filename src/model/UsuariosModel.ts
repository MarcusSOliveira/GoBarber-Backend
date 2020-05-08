import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Usuarios')
class Usuarios {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   Nome : string;

   @Column()
   email : string;

   @Column()
   password : string;

   @Column()
   avatar : string;

   @CreateDateColumn()
   CriadoEm : Date;

   @UpdateDateColumn()
   AtualizadoEm: Date;
}

export default Usuarios;
