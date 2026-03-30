import Sequelize, { Model } from "sequelize";

export default class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        curso_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        curso_nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo "nome" deve ter entre 3 e 255 caracteres.'
            },
          }
        },
      },
      { sequelize }
    );
    return this;
  }
}
