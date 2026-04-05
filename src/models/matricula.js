import Sequelize, { Model } from "sequelize";

export default class Matricula extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        matricula_id_aluno: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        matricula_turma: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        matricula_atribuicao: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: "id" });
    this.hasMany(models.Turmas, { foreignKey: "turma_id" });
    this.hasMany(models.Atribuicoes, { foreignKey: "atribuicao_id" });
    this.hasMany(models.Notas, { foreignKey: "nota_id" });
  }
}
