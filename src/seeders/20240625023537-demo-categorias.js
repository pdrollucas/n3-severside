'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        nome_categoria: 'Armazenagem',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_categoria: 'Processamento',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
