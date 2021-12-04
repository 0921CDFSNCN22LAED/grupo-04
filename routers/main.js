const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController.js');

router.get('/', controlador.home);
router.get('/login', controlador.login);
router.get('/register', controlador.register);

/*** GET ALL CARDS ***/ 
router.get('/market', controlador.market);


/*** ADMIN EDITION ***/ 
router.get('/admin-edit', controlador.edition);
/*** EDIT ONE CARD ***/ 
router.get('/admin-edit/:id', controlador.edit);
router.put('/:id', controlador.update);

/*** CREATE ONE CARD (falta implear multer)***/ 
router.get('/admin-create', controlador.create);
router.post('/admin-create', controlador.new);


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', controlador.destroy);

module.exports = router;
