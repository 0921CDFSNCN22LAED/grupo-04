const path = require('path');
const express = require('express');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mainRoutes = require('./routers/main');
const userRoutes = require('./routers/userRoutes');
const apiUsersRoutes = require('./routers/api/userRoutes');
const apiCardsRoutes = require('./routers/api/cardRoutes');
const apiCategories = require('./routers/api/categoriesRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
var cors = require('cors')

const app = express();

// ************ Middlewares ************
app.use(cors({ origin: 'http://localhost:3000' }));
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

app.listen(process.env.PORT || 3001, () => {
  console.log('Servidor funcionando en puerto 3001');
});

// ************* Routes ************
app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/api/users', apiUsersRoutes);
app.use('/api/products', apiCardsRoutes);
app.use('/api/categories', apiCategories);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});