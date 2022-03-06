const { listUsers, findByPK } = require('../../services/user-model');

module.exports = {
  async listAPIUsers(req, res){
    try {
      const dataUsers = await listUsers();
      if(dataUsers){
        const data = dataUsers.map(data => {
          return {
            id: data.id,
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            role: data.role,
            detail: `api/users/${data.id}`
          }
        });      
        const response = {
          meta: {
            status: true,
            count: dataUsers.length,
            url: '/api/users/'
          },
          data,
        };
        return res.json(response);        
      }
    } catch (error) {
      console.log(error);
      const data = 'Tuvimos un problema';
      const response = {
        meta: {
          status: false,
          url: '/api/users/'
        },
        data,
      };
      return res.json(response);
    }
  },

  async detail(req, res) {
    try {
      const user = await findByPK(req.params.id);
      const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            detail: `api/users/${user.id}`
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