const fs = require('fs');
const path = require('path');

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

  createOne(body, file){
    const user = {
      id: Date.now(), //timestamp
      role: "user",
      image: '/images/avatars/' + file.filename,
      ...body,
    };

    listUsers.push(user);
    saveUsers();
   },

   createAdmin(body, file){
    const user = {
      id: Date.now(), //timestamp
      role: "admin",
      image: '/images/avatars/' + file.filename,
      ...body,
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

