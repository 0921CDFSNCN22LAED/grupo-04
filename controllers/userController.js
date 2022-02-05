const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const usersModel = require('../services/user-model');


const controllador = {
  login: (req, res) => {
    res.render('login', {
      pageTitle: 'Login - ',
    });
  },

  processLogin: async (req, res) => {
    let userToLogin = await usersModel.findByEmail(req.body.email); // busca en la DB
    
    if(userToLogin){
      let confirmPassword = bcrypt.compareSync(req.body.password, userToLogin.password)    
      if(confirmPassword){
        // delete userToLogin.password; // no va
        req.session.userLogged = userToLogin;
        
        
        if(req.body.rememberUser){
          res.cookie('rememberMe', req.body.email, { maxAge: (100 * 60) * 60})
        }
        
        if(userToLogin.dataValues.role == 'admin'){
          return res.redirect('/admin-edit');
        }

        return res.redirect('/user/profile');
      }
      return res.render('login', {
        pageTitle: 'Login - ',
        errors: {
          email: {
            msg: 'Las credenciales son invalidas'
          }
        },        
      });
    }

    return res.render('login', {
      pageTitle: 'Login - ',
			errors: {
				email: {
					msg: 'No se encuentra registrado en nuestro Calamarket'
				}
			},      
		});
  },

  register: (req, res) => {
    res.render('register', {
      pageTitle: 'Register - ',
    });
  },

  processRegister: async (req, res) => {
    const resultValidations = validationResult(req);
    const userInDB = await usersModel.findByEmail(req.body.email);
    
    if(userInDB){
      return res.render('register', {
        errors: {
          email: {
            msg: 'Este email ya esta registrado'
          }
        },
        oldData: req.body
      })
    }    
    
    if(resultValidations.errors.length > 0){
      return res.render('register', {
        errors: resultValidations.mapped(),
        oldData: req.body
      });
    }

    if(!userInDB && resultValidations.errors.length <= 0){
    usersModel.createOne(req.body, req.file)
    .then(() => {
      return res.redirect('/market');
      })
    .catch(error => console.log(error));      
    }    

  },

  profile: (req, res) => {
    res.render('userProfile', {
      pageTitle: 'Profile - ',
      user: req.session.userLogged,
    })
  },

  logout: (req, res) => {
    res.clearCookie('rememberMe');
    req.session.destroy();
    return res.redirect('/');
  },

  registerAdmin: (req, res) => {
    res.render('registerAdmin', {
      pageTitle: 'Register Admin - ',
    });
  },

  processRegisterAdmin: async (req, res) => {
    const resultValidations = validationResult(req);
    let userInDB = await usersModel.findByEmail(req.body.email);

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
    
    if(resultValidations.errors.length > 0){
      res.render('registerAdmin', {
        errors: resultValidations.mapped(),
        oldData: req.body
      });
    }      
    
    if(!userInDB && resultValidations.errors.length <= 0){
    usersModel.createAdmin(req.body, req.file)
    .then(() => {
      return res.redirect('/admin-edit');
    })
    }    
  },

  listUsers: (req, res) => {
    usersModel.listUsers()
    .then(listUsers => {
      res.render('listUsers', {
        pageTitle: 'Users Admin - ',
        listUsers
      })
    })
  },

  destroyUser: (req, res) => {
    const id = req.params.id;
    usersModel.deleteOne(id)
    .then(() => {
      res.redirect('/user/edit');
    })
    .catch(error => console.log(error));
  },

};


module.exports = controllador;