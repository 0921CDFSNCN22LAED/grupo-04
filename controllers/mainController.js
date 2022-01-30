const db = ('../database/models');

const cardsModel = require('../services/card-model');


const controlador = {
  home: (req, res) => {
    res.render('home', {
      pageTitle: 'Home - ',
    });
  },

  market: (req, res) => {
    let listCards = cardsModel.listCards();
    let categories = cardsModel.categories();
    Promise
    .all([listCards, categories])
    .then(([listCards, categories]) => {
        res.render('market',{
        pageTitle: 'Marketplace - ',
        listCards,
        categories
      });
    })
    .catch(error => console.log(error))
  },

  edition: (req, res) => {
    let listCards = cardsModel.listCards();
    let categories = cardsModel.categories();
    Promise
    .all([listCards, categories])
    .then(([listCards, categories]) => {
        res.render('admin-cards',{
        pageTitle: 'Admin - ',
        listCards,
        categories
      });
    })
    .catch(error => console.log(error))
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
    cardsModel.categories()
    .then(categories => {
      res.render('admin-create-cards', {
        pageTitle: 'Admin - ',
        categories
      })
    })
  },

  new: (req, res) => {
    cardsModel.createOne(req.body, req.file)
    .then(()=>{
      res.redirect('/admin-edit'); 
    })
    .catch(error => console.log(error));
  },

  destroy: (req, res) => {
    const id = req.params.id;
    cardsModel.deleteOne(id);

    res.redirect('/admin-edit');
  }
};

module.exports = controlador;
