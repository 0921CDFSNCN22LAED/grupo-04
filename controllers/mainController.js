const db = ('../database/models');

const cardsModel = require('../services/card-model');


const controlador = {
  home: (req, res) => {
    res.render('home', {
      pageTitle: 'Home - ',
    });
  },

  market: (req, res) => {
    cardsModel.listCards()
    .then(cards => {
        res.render('market',{
        pageTitle: 'Marketplace - ',
        listCards: cards
      });
    })
    .catch(error => console.log(error))
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
    cardsModel.deleteOne(id);

    res.redirect('/admin-edit');
  }
};

module.exports = controlador;
