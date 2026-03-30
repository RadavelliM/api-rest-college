'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('turmas', {
        turma_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        turma_sala: {
          type: Sequelize.STRING,
          allowNull: false
        },

        turma_semestre: {
          type: Sequelize.INTEGER,
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

  async down (queryInterface) {
    await queryInterface.dropTable('turmas');
  }
};
