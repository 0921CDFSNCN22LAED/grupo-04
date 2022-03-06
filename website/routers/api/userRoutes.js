const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/apiController/apiUsers');

// End Points API
router.get('/', apiController.listAPIUsers);
router.get('/:id', apiController.detail);

module.exports = router;