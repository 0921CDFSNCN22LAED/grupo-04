// const { findByField } = require('../services/user-model');
const { findByEmail } = require('../services/user-model');

async function userLoggedMiddleware(req, res, next){
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = findByField('email', emailInCookie);

  if(emailInCookie){
    let userFromCookie = await findByEmail(emailInCookie); 
    
    if(userFromCookie){
      req.session.userLogged = userFromCookie;
    }
    
  }

	if(req.session.userLogged){
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
    const user = req.session.userLogged;
  
    if (user.role == 'admin') {
      res.locals.isAdmin = true;
    }
	}




	next();
}

module.exports = userLoggedMiddleware;