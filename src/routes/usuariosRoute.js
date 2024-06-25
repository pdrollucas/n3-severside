const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();

const router = Router();

router.post('/cadastrar', (req, res) => usuarioController.criarUsuario(req, res));
router.post('/login', (req, res) => usuarioController.loginUsuario(req, res));

module.exports = router;