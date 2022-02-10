const { body } = require('express-validator');

module.exports = [
  body('name').notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 3 }).withMessage('Debe ser minimo 3 caracteres'),
  body('userName').notEmpty().withMessage('Debes ingresar un Nickname/Username')
    .isLength({ min: 3 }).withMessage('Debe ser minimo 3 caracteres'),
  body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
  body('passwordCheck').custom((value, { req }) =>{ 
    if(value !== req.body.password){
    throw new Error('Las contraseñas deben ser iguales')
    }
    return true;
}),
  body('avatar').custom((value, { req }) => {
    let file = req.file;
    if(!file){
      throw new Error('Tienes que subir una imagen')
    }
    return true;
  })  
]