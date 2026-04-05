import Sequelize, { Model } from "sequelize";

export default class Notas extends Model {
  static init(sequelize) {
    super.init(
      {
        nota_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        matricula_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        nota: {
          type: Sequelize.DECIMAL,
          allowNull: false
        }
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Matricula, { foreignKey: "matricula_id" });
  }
}
