const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const listUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function saveUsers(){
	const texto = JSON.stringify(listUsers, null, 2);
	fs.writeFileSync(usersFilePath, texto, "utf-8");
}