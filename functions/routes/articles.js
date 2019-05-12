const express = require('express');

const path = require('path');

const router = express.Router();

const articleController = require('../controllers/articles');

router.get('/article', articleController.getArticles);

router.get('/article/:id', articleController.getArticle);

module.exports = router;