const { body } = require('express-validator');

module.exports = [
  body('name').notEmpty().withMessage('Debes ingresar un nombre'),
  body('userName').notEmpty().withMessage('Debes ingresar un Nickname/Username')
    .isLength({ min: 4 }).withMessage('Debes ser minimo de 4 caracteres'),
  body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
  body('passwordCheck').notEmpty().withMessage('Debes repetir la contraseña'),
  body('avatar').custom((value, { req }) => {
    let file = req.file;
    if(!file){
      throw new Error('Tienes que subir una imagen')
    }
    return true;
  })  
]