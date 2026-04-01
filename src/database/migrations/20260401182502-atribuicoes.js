'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('atribuicoes', {

      atribuicao_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      atribuicao_curso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
          key: 'curso_id'
        },
      },

      atribuicao_professor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professores',
          key: 'professor_id'
        }
      },

      atribuicao_materia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'materias',
          key: 'materia_id'
        }
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

  async down (queryInterface) {
    await queryInterface.dropTable('atribuicoes');
  }
};
