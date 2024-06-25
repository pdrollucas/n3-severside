const Controller = require('./Controller.js');
const EquipamentoServices = require('../services/EquipamentoServices.js');

const equipamentoServices = new EquipamentoServices();

class EquipamentoController extends Controller{
  constructor(){
    super(equipamentoServices);
  }
}
module.exports = EquipamentoController;