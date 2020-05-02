import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAgendamentos1588267008558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
         new Table({
            name: 'Agendamento',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
               },
               {
                  name: 'provider',
                  type: 'varchar',
                  isNullable: false,
               },
               {
                  name: 'data',
                  type: 'timestamp with time zone',
                  isNullable: false,
               },
               {
                  name: 'CriadoEm',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'AtualizadoEm',
                  type: 'timestamp',
                  default: 'now()',
               }
            ]
         })
      )
    }

   private readonly newProperty = 'Agendamento';

    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable(this.newProperty);
    }

}
