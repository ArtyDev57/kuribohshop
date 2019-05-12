const express = require('express');

const path = require('path');

const router = express.Router();

const aboutController = require('../controllers/about');

router.get('/about', aboutController.getAboutPage);

module.exports = router;