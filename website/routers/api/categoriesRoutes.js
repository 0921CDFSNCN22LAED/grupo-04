const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/apiController/apiCategories');

// End Points API
router.get('/', apiController.listCategories);


module.exports = router;