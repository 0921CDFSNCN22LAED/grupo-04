const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const controlador = require('../controllers/mainController.js');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/calamardos-nft'));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
})

const uploadFile = multer({ storage: storage });


router.get('/', controlador.home);
// router.get('/login', controlador.login);
// router.get('/register', controlador.register);

/*** GET ALL CARDS ***/ 
router.get('/market', controlador.market);


/*** ADMIN EDITION ***/ 
router.get('/admin-edit', controlador.edition);
/*** EDIT ONE CARD ***/ 
router.get('/admin-edit/:id', controlador.edit);
router.put('/:id', uploadFile.single('image'), controlador.update);

/*** CREATE ONE CARD ***/ 
router.get('/admin-create', controlador.create);
router.post('/admin-create', uploadFile.single('image'), controlador.new);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', controlador.destroy);

module.exports = router;
