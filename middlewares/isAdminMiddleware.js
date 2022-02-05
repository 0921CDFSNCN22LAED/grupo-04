async function isAdminMiddleware(req, res, next){
  const user = req.session.userLogged;

  if (user.role == 'user') {
		return res.redirect('/market');
	}

  res.locals.isAdmin = true;

	next();
}

module.exports = isAdminMiddleware;