const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');

router.get('/', controlador.home);
router.get('/login', controlador.login);
router.get('/register', controlador.register);
router.get('/market', controlador.market);
router.get('/admin-edit', controlador.edit);
router.put('/admin-edit', controlador.edit);
router.get('/admin-create', controlador.create);
router.post('/admin-create', controlador.create);

module.exports = router;
