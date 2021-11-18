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
};

module.exports = controlador;
