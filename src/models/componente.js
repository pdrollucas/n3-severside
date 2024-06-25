'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {
    static associate(models) {
      Componente.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Componente.belongsTo(models.Equipamento, {
        foreignKey: 'equipamento_id'
      });
    }
  }
  Componente.init({
    nome_componente: DataTypes.STRING,
    desc_componente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Componente',
    tableName: 'componentes'
  });
  return Componente;
};