const path = require('path');
const express = require('express');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mainRoutes = require('./routers/main');
const userRoutes = require('./routers/userRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();

// ************ Middlewares ************
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret page message',
  resave: false,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(userLoggedMiddleware); // va despues de la sesion

// ************ Template Engine ************
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor funcionando en puerto 3000');
});

// ************* Routes ************
app.use('/', mainRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});