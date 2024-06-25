const Controller = require('./Controller.js');
const ComponenteServices = require('../services/ComponenteServices.js');

const componenteServices = new ComponenteServices();

class EquipamentoController extends Controller{
  constructor(){
    super(componenteServices);
  }
}
module.exports = EquipamentoController;