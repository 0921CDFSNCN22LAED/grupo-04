const express = require('express');
const router = express.Router();


// Controller
const controlador = require('../controllers/userController.js');


// middlewares
const userValidations = require('../middlewares/userValidations');
const uploadFile = require('../middlewares/multerMiddlewareUser');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// Vista Formulario Login
router.get('/login', guestMiddleware, controlador.login);
//Procesa el login
router.post('/login', controlador.processLogin);

// Vista Formulario
router.get('/register', guestMiddleware, controlador.register);
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

// Vista Profile
router.get('/profile', authMiddleware, controlador.profile);

// Logout
router.get('/logout', controlador.logout);


module.exports = router;