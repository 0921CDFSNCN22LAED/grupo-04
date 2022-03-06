const { listCards, findOneByPk } = require('../../services/card-model');

module.exports = {
  async listApiCards(req, res){
    try {
      const dataCards = await listCards();
      if(dataCards){
        const data = dataCards.map(data => {
          return {
            id: data.id,
            name: data.name,
            description: data.description,
            rating: data.rating,
            image: data.image,
            create_data: data.create_data,
            category_id: data.category_id,
            categories: data.categories,
            detail: `api/products/${data.id}`
          }
        });
        const response = {
          meta: {
            status: true,
            count: dataCards.length,
            url: '/api/products/'
          },
          data: data,
        };
        return res.json(response);          
      }
    } catch (error) {
      console.error(error);
      const data = 'Tuvimos un problema';
      const response = {
        meta: {
          status: false,
          url: '/api/products/'
        },
        data,
      };
      return res.json(response);
    }
  },

  async detail(req, res){
    try {
      const card = await findOneByPk(req.params.id);
      const data = {
            id: card.id,
            name: card.name,
            description: card.description,
            rating: card.rating,
            image: card.image,
            create_data: card.create_data,
            category_id: card.category_id,
            categories: card.categories,
            detail: `api/products/${card.id}`
      };
      const response = {
        meta: {
          status: true,
          url: `/api/users/${req.params.id}`
        },
        user: data,
      }
        return res.json(response);
      
    } catch (error) {
      console.log(error);
    }
  },

}