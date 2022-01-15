const { validationResult } = require('express-validator');

const controllador = {
  login: (req, res) => {
    res.render('login', {
      pageTitle: 'Login - ',
    });
  },

  register: (req, res) => {
    res.render('register', {
      pageTitle: 'Register - ',
    });
  },

  processRegister: (req, res) => {
    const resultValidations = validationResult(req);
    
    if(resultValidations.errors.length > 0){
      res.render('register', {
        errors: resultValidations.mapped(),
        oldData: req.body
      })
    }
    return res.send('Pasaron las validaciones!')
  }

}


module.exports = controllador;