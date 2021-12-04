const { deleteOne } = require('../models/card-model');
const cardsModel = require('../models/card-model');


const controlador = {
  home: (req, res) => {
    res.render('home', {
      pageTitle: 'Home - Calamarket',
    });
  },

  login: (req, res) => {
    res.render('login', {
      pageTitle: 'Login - Calamarket',
    });
  },

  register: (req, res) => {
    res.render('register', {
      pageTitle: 'Register - Calamarket',
    });
  },

  market: (req, res) => {
    res.render('market',{
      pageTitle: 'Marketplace - Calamarket',
      listCards: cardsModel.getAll(),
    });
  },

  edition: (req, res) => {
    res.render('admin-cards', {
      pageTitle: 'Admin - Calamarket',
      listCards: cardsModel.getAll(),
    });
  },

  edit: (req, res) => {
    const id = req.params.id;
    const card = cardsModel.findOne(id);

    res.render('admin-edit-cards', {
      pageTitle: 'Admin - Calamarket',
      card: card,
    });
  },

  update: (req, res) => {
    const id = req.params.id;
		const dato = req.body;
		const card = cardsModel.findOne(id);

		cardsModel.updateOne(card, dato);

		res.redirect('/admin-edit');
  },

  create: (req, res) => {
    res.render('admin-create-cards');
    // res.redirect('/admin-edit');
  },

  destroy: (req, res) => {
    const id = req.params.id;
    deleteOne(id);

    res.redirect('/admin-edit');
  }
};

module.exports = controlador;
