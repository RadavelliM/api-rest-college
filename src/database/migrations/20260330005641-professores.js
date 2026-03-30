'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('professores', {

        professor_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        professor_nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        professor_sobrenome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        professor_dt_nasc: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        professor_email: {
          type: Sequelize.STRING,
          allowNull: false,
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
      await queryInterface.dropTable('professores');
  }
};
