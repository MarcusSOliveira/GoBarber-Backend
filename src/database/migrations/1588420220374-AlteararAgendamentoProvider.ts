import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlteararAgendamentoProvider1588420220374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropColumn('Agendamento', 'provider');
       await queryRunner.addColumn('Agendamento', new TableColumn({
          name: 'provider_id',
          type: 'uuid',
          isNullable: true,
       })
       );

       await queryRunner.createForeignKey('Agendamento', new TableForeignKey({
         name:'AgendamentoProvider',
         columnNames: ['provider_id'],
         referencedColumnNames: ['id'],
         referencedTableName: 'Usuarios',
         onDelete: 'SET NULL',
         onUpdate: 'CASCADE'
       })
       );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropForeignKey('Agendamento', 'AgendamentoProvider');

       await queryRunner.dropColumn('Agendamento', 'provider_id');

       await queryRunner.addColumn('Agendamento',
            new TableColumn({
               name: 'provider',
               type: 'uuid'
       })
       );
    }

}
