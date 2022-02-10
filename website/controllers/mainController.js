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
    const listCards = cardsModel.listCards();
    const categories = cardsModel.categories();
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
    const categories = cardsModel.categories();
    const findCard = cardsModel.findOneByPk(id)
    Promise
    .all([categories, findCard])
    .then( ([categories, findCard]) => {
      res.render('admin-edit-cards', {
        pageTitle: 'Admin - ',
        card: findCard,
        categories
      });
    })

  },

  update: (req, res) => {
    const id = req.params.id;
		const dato = req.body;
    const file = req.file;

    cardsModel.updateOne(id, dato, file)
    .then(() => {
      res.redirect('/admin-edit');
    })
    .catch(error => console.log(error));
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
    cardsModel.deleteOne(id)
    .then(() => {
      res.redirect('/admin-edit');
    })
    .catch(error => console.log(error));
  },

  search: (req, res) => {
    const categories = cardsModel.categories();
    const name = req.body.search;
    const find = cardsModel.search(name)
    
    Promise
    .all([find, categories])
    .then(([find, categories]) =>{
      res.render('market', {
        pageTitle: 'Marketplace - ',
        listCards: find,
        categories
      })
    })
    .catch(error => console.log(error));
  }

};

module.exports = controlador;
