const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userValidations = require('../middlewares/userValidations');
// const { body } = require('express-validator');

const controlador = require('../controllers/userController.js');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/avatars'));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
})

const uploadFile = multer({ storage: storage });



// Vista Formulario
router.get('/login', controlador.login);
router.get('/register', controlador.register);

// Procesa el Registro
router.post('/register', uploadFile.single('avatar'), userValidations, controlador.processRegister);

module.exports = router;