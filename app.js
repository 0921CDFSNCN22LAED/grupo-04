const path = require('path');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const express = require('express');
const mainRoute = require('./routers/main');

const app = express();

// ************ Middlewares ************
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// ************ Template Engine ************
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor funcionando');
});

app.use('/', mainRoute);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});