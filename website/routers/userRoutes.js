const express = require('express');
const router = express.Router();


// Controller
const controlador = require('../controllers/userController.js');


// middlewares
const userValidations = require('../middlewares/userValidations');
const uploadFile = require('../middlewares/multerMiddlewareUser');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/isAdminMiddleware');


// Vista Formulario Login
router.get('/login', guestMiddleware, controlador.login);
//Procesa el login
router.post('/login', controlador.processLogin);

// Vista Formulario
router.get('/register', guestMiddleware, controlador.register);
// Procesa el Registro
router.post('/register', uploadFile.single('avatar'), userValidations, controlador.processRegister);

// Form admin
router.get('/admin', authMiddleware, adminMiddleware, controlador.registerAdmin);
// Procesa el form del Admin
router.post('/admin', uploadFile.single('avatar'), userValidations, controlador.processRegisterAdmin);

// Vista edit usuarios, solo Admin
router.get('/edit', authMiddleware, adminMiddleware, controlador.listUsers);
// Procesa Borrado de usuarios, solo Admin
router.delete('/:id', authMiddleware, controlador.destroyUser);

// Vista Profile
router.get('/profile', authMiddleware, controlador.profile);
// Vista Edit profile
router.get('/edit/:id', authMiddleware, controlador.edit);
//Procesa Edit Profile
router.put('/edit/:id', uploadFile.single('avatar'), controlador.update);

// Logout
router.get('/logout', authMiddleware, controlador.logout);


module.exports = router;