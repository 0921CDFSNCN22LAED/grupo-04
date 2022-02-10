const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/isAdminMiddleware');


// Controller
const controlador = require('../controllers/mainController.js');

// middlewares
const uploadFile = require('../middlewares/multerMiddlewareCard');

/*** Home ***/ 
router.get('/', controlador.home);

/*** GET ALL CARDS ***/ 
router.get('/market', controlador.market);

/*** POST SEARCH CARDS ***/ 
router.post('/market', controlador.search);


/*** ADMIN EDITION ***/ 
router.get('/admin-edit', authMiddleware, adminMiddleware, controlador.edition);
/*** EDIT ONE CARD ***/ 
router.get('/admin-edit/:id', authMiddleware, adminMiddleware, controlador.edit);
router.put('/:id', uploadFile.single('image'), controlador.update);

/*** CREATE ONE CARD ***/ 
router.get('/admin-create', authMiddleware, adminMiddleware, controlador.create);
router.post('/admin-create', uploadFile.single('image'), controlador.new);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', authMiddleware, adminMiddleware, controlador.destroy);

module.exports = router;
