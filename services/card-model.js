const db = require('../database/models');
const Op = db.Sequelize.Op;

// Services Data Json
// const fs = require('fs');
// const path = require('path');

// const cardsFilePath = path.join(__dirname, '../data/cardsDataBase.json');
// const listCards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf-8'));

// function saveCards(){
// 	const texto = JSON.stringify(listCards, null, 2);
// 	fs.writeFileSync(cardsFilePath, texto, "utf-8");
// }

module.exports = {
  listCards(){
    return db.Cards.findAll({
      include: [{association: 'categories'}]
    });
  },

  categories(){
    return db.CategoryCards.findAll();
  },

  createOne(body, file){
      return db.Cards.create({
      name: body.name,
      description: body.desc,
      rating: body.rating,
      image: '/images/calamardos-nft/' + file.filename,
      create_data: body.date,
      price: body.price,
      category_id: body.category      
    })
  },

  findOneByPk(id){
    return db.Cards.findByPk(id)
  },

  updateOne(id, dato, file){
    return db.Cards.findByPk(id).then( card => 
      card.update({
            name: dato.name,
            description: dato.desc,
            rating: dato.rating,
            image: file ? '/images/calamardos-nft/' + file.filename : card.image,
            create_data: dato.date,
            price: dato.price,
            category_id: dato.category      
      }))
  },

  deleteOne(id){
    return db.Cards.destroy({
      where: {
        id: id
      }
    })
  },

  search(name){
    return db.Cards.findAll({
      where: {
        name: {
          [Op.like]:'%'+ name +'%'
        }
      }
    })
  }


  // Services Data Json

  // listCards,
  // saveCards,

  // getAll(){
  //   return listCards;
  // },

  // findOne(id){
  //   const card = listCards.find(card => card.id == id);
  //   return card;
  // },

  // updateOne(card, dato, file){
  //   card.name = dato.name;
  //   card.price = dato.price;
  //   card.date = dato.date;
  //   card.category = dato.category;
  //   card.desc = dato.desc;
  //   if(file){
  //    card.image = '/images/calamardos-nft/' + file.filename;
  //   }
  //   saveCards();
  //  },

  //  createOne(body, file){
  //   const card = {
  //     id: Date.now(), //timestamp
  //     image: '/images/calamardos-nft/' + file.filename,
  //     ...body,
  //   };

  //   listCards.push(card);
  //   saveCards();
  //  },
  
  //  deleteOne(id){
  //   const index = listCards.findIndex(card => card.id == id);
  //   listCards.splice(index, 1);
  
  //   saveCards();
  //  },
}