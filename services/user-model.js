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

