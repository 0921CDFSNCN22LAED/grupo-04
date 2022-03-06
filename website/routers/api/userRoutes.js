const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/apiController/apiUsers');

// End Points API
router.get('/users', apiController.listAPIUsers);
router.get('/users/:id', apiController.detail);

module.exports = router;