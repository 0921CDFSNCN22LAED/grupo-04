const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const listUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function saveUsers(){
	const texto = JSON.stringify(listUsers, null, 2);
	fs.writeFileSync(usersFilePath, texto, "utf-8");
}

module.exports = {
  listUsers,
  saveUsers,

  getAll(){
    return listUsers;
  },

  findByPk(id){
    const user = listUsers.find(user => user.id == id);
    return user;
  },

  // devuelve el primero que encuentra
  findByField(field, text){
    const user = listUsers.find(user => user[field] === text);
    return user;
  },

  findByEmail(email){
    const user = listUsers.find(user => user.email === email);
    return user;
  },

  createOne(body, file){
    const user = {
      id: Date.now(),
      ...body, //timestamp
      role: "user",
      image: '/images/avatars/' + file.filename,
      password: bcrypt.hashSync(body.password, 10),
      passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
    }

    listUsers.push(user);
    saveUsers();
   },

   createAdmin(body, file){
    const user = {
      id: Date.now(), //timestamp
      ...body,
      role: "admin",
      image: '/images/avatars/' + file.filename,
      password: bcrypt.hashSync(body.password, 10),
      // passwordCheck: bcrypt.hashSync(body.passwordCheck, 10),
    };

    listUsers.push(user);
    saveUsers();
   },

   deleteOne(id){
    const index = listUsers.findIndex(user => user.id == id);
    listUsers.splice(index, 1);
  
    saveUsers();
   }

}

