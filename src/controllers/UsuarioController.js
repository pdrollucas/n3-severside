const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');

const usuarioServices = new UsuarioServices();

class UsuarioController extends Controller{
  constructor(){
    super(usuarioServices);
  }
}
module.exports = UsuarioController;