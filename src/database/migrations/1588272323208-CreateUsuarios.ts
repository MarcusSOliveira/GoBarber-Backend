import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsuarios1588272323208 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
         new Table({
            name: 'Usuarios',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
               },
               {
                  name: 'Nome',
                  type: 'varchar',
                  isNullable: false,
               },
               {
                  name: 'email',
                  type: 'varchar',
                  isUnique: true,
               },
               {
                  name: 'password',
                  type: 'varchar',
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
               },

            ]
         })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable('Usuarios');
    }

}
