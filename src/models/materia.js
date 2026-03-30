import Sequelize, { Model } from "sequelize";

export default class Materias extends Model {
  static init(sequelize) {
    super.init(
      {
        materia_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        materia_nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo "materia_nome" deve ter entre 3 e 255 caracteres.'
            },
          }
        },
      },
      { sequelize }
    );
    return this;
  }
}


