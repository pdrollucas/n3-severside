const { Router } = require('express');
const ComponenteController = require('../controllers/ComponenteController.js');

const componenteController = new ComponenteController();

const router = Router();

router.get('/componentes', (req, res) => componenteController.pegaTodos(req, res));
router.get('/componentes/:id', (req, res) => componenteController.pegaUmPorId(req, res));
router.post('/componentes', (req, res) => componenteController.criaNovo(req, res));
router.put('/componentes/:id', (req, res) => componenteController.atualiza(req, res));
router.delete('/componentes/:id', (req, res) => componenteController.exclui(req, res));

module.exports = router;