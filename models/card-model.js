const fs = require('fs');
const path = require('path');

const cardsFilePath = path.join(__dirname, '../data/cardsDataBase.json');
const listCards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf-8'));

function saveCards(){
	const texto = JSON.stringify(listCards, null, 2);
	fs.writeFileSync(cardsFilePath, texto, "utf-8");
}

module.exports = {
  listCards,
  saveCards,

  getAll(){
    return listCards;
  },

  findOne(id){
    const card = listCards.find(card => card.id === id);
    return card;
  },

  updateOne(card, dato){
    card.name = dato.name;
    card.price = dato.price;
    card.date = dato.date;
    card.category = dato.category;
    card.desc = dato.desc;
    // img
  
    saveCards();
   },

   createOne(body){
    const card = {
      id: Date.now(), //timestamp
      ...body,
    };

    listCards.push(card);
    saveCards();
   },
  
   deleteOne(id){
    const index = listCards.findIndex(card => card.id == id);
    listCards.splice(index, 1);
  
    saveCards();
   },
}