'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('componentes', [
      {
        nome_componente: 'HD',
        desc_componente: 'Armazenamento legal',
        categoria_id: 1,
        equipamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_componente: 'Intel Core 7',
        desc_componente: 'Bom processador',
        categoria_id: 2,
        equipamento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_componente: 'Intel Core 9',
        desc_componente: 'Excelente processador',
        categoria_id: 2,
        equipamento_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_componente: 'SSD',
        desc_componente: 'Bom armazeamento',
        categoria_id: 1,
        equipamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('componentes', null, {});
  }
};
