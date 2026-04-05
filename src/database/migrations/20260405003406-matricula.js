"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "matriculas",
      {
        matricula_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        matricula_id_aluno: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "alunos",
            key: "id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        },

        matricula_turma: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "turmas",
            key: "turma_id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        },

        matricula_atribuicao: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "atribuicoes",
            key: "atribuicao_id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      { engine: "InnoDB", charset: "utf8mb4" }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable("matriculas");
  }
};
