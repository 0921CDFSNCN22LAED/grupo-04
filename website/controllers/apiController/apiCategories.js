const { categories } = require('../../services/card-model');

module.exports = {
  async listCategories(req, res){
    try{
      const dataCategories = await categories();
      if(dataCategories){
        const data = dataCategories.map(data => {
          return {
            id: data.id,
            name: data.name
          }
        });
        const response = {
          meta: {
            status: true,
            count: data.length,
            url: 'api/categories/'
          },
          data,
        };
        return res.json(response);
      }
    } catch (error){
      console.log(error);
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

  }
}