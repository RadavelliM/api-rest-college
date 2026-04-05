"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notas", {
      nota_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      matricula_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "matriculas",
          key: "matricula_id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },

      nota: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("notas");
  }
};
