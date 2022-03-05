const { body } = require('express-validator');

module.exports = [
  body('name').notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 3 }).withMessage('Debe ser minimo 3 caracteres'),
  body('category').isInt().withMessage('Debes selecionar una categoria'),
  body('date').notEmpty().withMessage('Debes seleccionar una fecha'),
  body('desc').notEmpty().withMessage('Debes ingresar una descripcion'),
  body('price').notEmpty().withMessage('Debes ingresar un precio'),
  body('rating').notEmpty().withMessage('Debes ingresar un rating'),
  body('image').custom((value, { req }) => {
    let file = req.file;
    if(!file){
      throw new Error('Tienes que subir una imagen')
    }
    return true;
  })  
]
