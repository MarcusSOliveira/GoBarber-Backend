import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddAvatarInUsuarios1588783848835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.addColumn('Usuarios', new TableColumn({
          name: 'avatar',
          type: 'varchar',
          isNullable: true,
       }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('Usuarios', 'avatar');
   }
}
