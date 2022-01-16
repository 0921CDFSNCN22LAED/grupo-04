const express = require('express');
const router = express.Router();


// Controller
const controlador = require('../controllers/userController.js');


// middlewares
const userValidations = require('../middlewares/userValidations');
const uploadFile = require('../middlewares/multerMiddlewareUser');


// Vista Formulario Login
router.get('/login', controlador.login);
//Procesa el login
router.post('/login', controlador.processLogin);

// Vista Formulario
router.get('/register', controlador.register);
// Procesa el Registro
router.post('/register', uploadFile.single('avatar'), userValidations, controlador.processRegister);

// Form admin // crear Middleware para Admin
router.get('/admin', controlador.registerAdmin);
// Procesa el form del Admin
router.post('/admin', uploadFile.single('avatar'), userValidations, controlador.processRegisterAdmin);

// Vista edit usuarios // crear Middleware para Admin
router.get('/edit', controlador.listUsers);
// Procesa Borrado de usuarios
router.delete('/:id', controlador.destroyUser);

module.exports = router;