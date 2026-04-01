import Sequelize, { Model } from "sequelize";

export default class Atribuicoes extends Model {
  static init(sequelize) {
    super.init(
      {
        atribuicao_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        atribuicao_curso: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        atribuicao_professor: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        atribuicao_materia: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Curso, { foreignKey: "curso_id" });
    this.hasMany(models.Professore, { foreignKey: "professor_id" });
    this.hasMany(models.Materias, { foreignKey: "materia_id" });
  }
}
