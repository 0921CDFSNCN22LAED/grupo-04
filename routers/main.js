const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');

router.get('/', controlador.home);
router.get('/login', controlador.login);
router.get('/register', controlador.register);
router.get('/market', controlador.market);

module.exports = router;
