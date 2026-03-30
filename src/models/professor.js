import Sequelize, { Model } from "sequelize";

export default class Professore extends Model {
  static init(sequelize) {
    super.init(
      {
        professor_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        professor_nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo "nome" deve ter entre 3 e 255 caracteres.'
            },
          }
        },

        professor_sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo "sobrenome" deve ter entre 2 e 255 caracteres.'
            }
          }
        },

        professor_dt_nasc: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo "data de nascimento" deve ter entre 2 e 255 caracteres.'
            }
          }
        },

        professor_email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              args: [6, 255],
              msg: "Email inválido."
            }
          },
          unique: {
            msg: "Email já cadastrado no sistema"
          }
        }
      },
      { sequelize }
    );
    return this;
  }
}
