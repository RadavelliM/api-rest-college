'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('materias', {

          materia_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },

          materia_nome: {
            type: Sequelize.STRING,
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
        }
      );
  },

  async down (queryInterface) {

      await queryInterface.dropTable('materias');
  }
};
