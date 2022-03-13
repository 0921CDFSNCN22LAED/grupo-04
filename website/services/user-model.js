const db = require('../database/models');
const bcrypt = require('bcryptjs');


module.exports = {
  listUsers(){
    return db.Users.findAll();
  },

  createOne(body, file){
    return db.Users.create({
      name: body.name,
      user_name: body.userName,
      email: body.email,
      avatar: '/images/avatars/' + file.filename,
      password: bcrypt.hashSync(body.password, 10),
      passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
      role: "user",
    })
   },  

   findByEmail(email){
    return db.Users.findOne({
      where: {
        email: email
      }
    })
  },

  findByPK(id){
    return db.Users.findByPk(id)
  },

  createAdmin(body, file){
    return db.Users.create({
      name: body.name,
      user_name: body.userName,
      email: body.email,
      avatar: '/images/avatars/' + file.filename,
      password: bcrypt.hashSync(body.password, 10),
      passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
      role: "admin",
    })
   },

   updateOne(id, dato, file){
    return db.Users.findByPk(id).then( user => 
      user.update({
            name: dato.name,
            user_name: dato.userName,
            email: dato.email,
            avatar: file ? '/images/avatars/' + file.filename : user.avatar,
            // password: bcrypt.hashSync(dato.password, 10),
            // passwordCheck: bcrypt.hashSync(dato.passwordCheck, 10),      
      }))
  },

   deleteOne(id){
    return db.Users.destroy({
      where: {
        id: id
      }
    })
   },

   oldBuyComplete(){
    return db.Karts.findAll({
      include: [
        {association: 'kart'},
        {association: 'products'}
      ]
    })
   },
 
}

