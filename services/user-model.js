const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = require('../database/models');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const listUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// function saveUsers(){
// 	const texto = JSON.stringify(listUsers, null, 2);
// 	fs.writeFileSync(usersFilePath, texto, "utf-8");
// }

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
   


  //Services Data Json
  
  // listUsers,
  // saveUsers,

  // getAll(){
  //   return listUsers;
  // },

  findByPk(id){ // arreglar
    const user = listUsers().find(user => user.id == id);
    return user;
  },

  // devuelve el primero que encuentra
  findByField(field, text){ // ver cookie no busca en la db
    const user = listUsers.find(user => user[field] === text);
    return user;
  },



  // createOne(body, file){
  //   const user = {
  //     id: Date.now(),
  //     ...body,
  //     role: "user",
  //     avatar: '/images/avatars/' + file.filename,
  //     password: bcrypt.hashSync(body.password, 10),
  //     passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
  //   }

  //   listUsers.push(user);
  //   saveUsers();
  //  },

  //  createAdmin(body, file){
  //   const user = {
  //     id: Date.now(),
  //     ...body,
  //     role: "admin",
  //     image: '/images/avatars/' + file.filename,
  //     password: bcrypt.hashSync(body.password, 10),
  //     passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
  //   };

  //   listUsers.push(user);
  //   saveUsers();
  //  },

  //  deleteOne(id){
  //   const index = listUsers.findIndex(user => user.id == id);
  //   listUsers.splice(index, 1);
  
  //   saveUsers();
  //  }
 
}

