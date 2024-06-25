'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('equipamentos',[
      {
        nome_equipamento: 'Computador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_equipamento: 'Notebook',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_equipamento: 'PC da Xuxa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_equipamento: 'Macbook',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('equipamentos', null, {});
  }
};
