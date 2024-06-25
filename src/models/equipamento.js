'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipamento extends Model {
    static associate(models) {
      Equipamento.hasMany(models.Componente, {
        foreignKey: 'equipamento_id'
      });
    }
  }
  Equipamento.init({
    nome_equipamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipamento',
    tableName: 'equipamentos'
  });
  return Equipamento;
};