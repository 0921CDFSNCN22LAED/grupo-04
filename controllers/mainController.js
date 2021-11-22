const controlador = {
  home: (req, res) => {
    res.render('home');
  },
  login: (req, res) => {
    res.render('login');
  },
  register: (req, res) => {
    res.render('register');
  },
  market: (req, res) => {
    res.render('market');
  },
  edit: (req, res) => {
    res.render('admin-edit-products');
  },
  create: (req, res) => {
    res.render('admin-create-products');
  }
};

module.exports = controlador;
