const { validationResult } = require('express-validator');
const usersModel = require('../services/user-model');

const controllador = {
  login: (req, res) => {
    res.render('login', {
      pageTitle: 'Login - ',
    });
  },

  processLogin: (req, res) => {
    // completar
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
    usersModel.createOne(req.body, req.file)
      return res.redirect('/market');    
  },

  registerAdmin: (req, res) => {
    res.render('registerAdmin', {
      pageTitle: 'Register Admin - ',
    });
  },

  processRegisterAdmin: (req, res) => {
    const resultValidations = validationResult(req);
    
    if(resultValidations.errors.length > 0){
      res.render('registerAdmin', {
        errors: resultValidations.mapped(),
        oldData: req.body
      })
    }
    usersModel.createAdmin(req.body, req.file)
      return res.redirect('/admin-edit');    
  }

}


module.exports = controllador;