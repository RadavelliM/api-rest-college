import Sequelize, { Model } from "sequelize";

export default class Turmas extends Model {
  static init(sequelize) {
    super.init(
      {
        turma_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },


        turma_sala: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo "sobrenome" deve ter entre 2 e 255 caracteres.'
            },
          }
        },

        turma_semestre: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          allowNull: false
        },

      },
      { sequelize }
    );
    return this;
  }
}
