const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
  listCards(){
    return db.Cards.findAll({
      include: [
        {association: 'categories'},
        {association: 'products'}
      ]
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

}