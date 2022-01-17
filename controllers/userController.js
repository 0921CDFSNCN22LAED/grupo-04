const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const usersModel = require('../services/user-model');


const controllador = {
  login: (req, res) => {
    res.render('login', {
      pageTitle: 'Login - ',
    });
  },

  processLogin: (req, res) => {
    let userToLogin = usersModel.findByEmail(req.body.email); // no funciona
    // let userToLogin = usersModel.findByField('email', req.body.email); // no funciona
    return console.log(userToLogin); 

    // if(userToLogin){
    //   let confirmPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
    //   if(confirmPassword){
    //     return res.send('Puedes ingresar')
    //   }
    // }

    // return res.render('login', {
    //   pageTitle: 'Login - ',
		// 	errors: {
		// 		email: {
		// 			msg: 'No se encuentra este email en nuestra base de datos'
		// 		}
		// 	},
      
		// });
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
      });
    }

    let userInDB = usersModel.findByField('email', req.body.email);

    if(userInDB){
      res.render('register', {
        errors: {
          email: {
            msg: 'Este email ya esta registrado'
          }
        },
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
  },

  listUsers: (req, res) => {
    res.render('listUsers', {
      pageTitle: 'Users Admin - ',
      listUsers: usersModel.getAll(),
    });
  },

  destroyUser: (req, res) => {
    const id = req.params.id;
    usersModel.deleteOne(id);

    res.redirect('/user/edit');
  },

};


module.exports = controllador;