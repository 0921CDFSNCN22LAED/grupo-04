const listCards = [
  {
    id: "1",
    name: "Ryu",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "14/11/2021",
    price: "0.5",
    img: "/images/calamardos-nft/ryu.jpg",
  },
  {
    id: "2",
    name: "Sailor Moon",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    date: "15/11/2021",
    price: "0.6",
    img: "/images/calamardos-nft/sailor_moon1.jpg",
  },
  {
    id: "3",
    name: "Sasuke",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "16/11/2021",
    price: "0.3",
    img: "/images/calamardos-nft/sasukeFinal.jpg",
  },
  {
    id: "4",
    name: "Ryu2",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    date: "14/11/2021",
    price: "0.5",
    img: "/images/calamardos-nft/ryu.jpg",
  }
];


const controlador = {
  home: (req, res) => {
    res.render('home', {
      pageTitle: 'Home - Calamarket',
    });
  },
  login: (req, res) => {
    res.render('login');
  },
  register: (req, res) => {
    res.render('register');
  },
  market: (req, res) => {
    res.render('market',{
      listCards: listCards
    });
  },
  edit: (req, res) => {
    res.render('admin-edit-products');
  },
  create: (req, res) => {
    res.render('admin-create-products');
    // res.redirect('/admin-edit');
  }
};

module.exports = controlador;
