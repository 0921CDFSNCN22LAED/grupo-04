const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/apiController/apiCards');

// End Points API
router.get('/', apiController.listApiCards);
router.get('/:id', apiController.detail);

module.exports = router;