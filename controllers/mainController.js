const path = require('path');

const controlador = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
  },
  login: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  },
  register: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
  },
  market: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/market.html'));
  },
};

module.exports = controlador;
