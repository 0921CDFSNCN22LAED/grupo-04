const express = require('express');
const mainRoute = require('./routers/main');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Servidor funcionando');
});

app.use('/', mainRoute);
