const { deleteOne } = require('../models/card-model');
const cardsModel = require('../models/card-model');


const controlador = {
  home: (req, res) => {
    res.render('home', {
      pageTitle: 'Home - ',
    });
  },

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

  market: (req, res) => {
    res.render('market',{
      pageTitle: 'Marketplace - ',
      listCards: cardsModel.getAll(),
    });
  },

  edition: (req, res) => {
    res.render('admin-cards', {
      pageTitle: 'Admin - ',
      listCards: cardsModel.getAll(),
    });
  },

  edit: (req, res) => {
    const id = req.params.id;
    const card = cardsModel.findOne(id);

    res.render('admin-edit-cards', {
      pageTitle: 'Admin - ',
      card: card,
    });
  },

  update: (req, res) => {
    const id = req.params.id;
		const dato = req.body;
		const card = cardsModel.findOne(id);
    const file = req.file;

		cardsModel.updateOne(card, dato, file);

		res.redirect('/admin-edit');
  },

  create: (req, res) => {
    res.render('admin-create-cards', {
      pageTitle: 'Admin - ',
    });
  },

  new: (req, res) => {
    cardsModel.createOne(req.body, req.file)
    res.redirect('/admin-edit');
  },

  destroy: (req, res) => {
    const id = req.params.id;
    deleteOne(id);

    res.redirect('/admin-edit');
  }
};

module.exports = controlador;
