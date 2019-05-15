const functions = require('firebase-functions');

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('./node_modules/body-parser');

const app = express();

const homeRoute = require('./routes/home');
const productRoute = require('./routes/products');
const articleRoute = require('./routes/articles');
const aboutRoute = require('./routes/about');

const errController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(aboutRoute);
app.use(articleRoute);
app.use(productRoute);
app.use(homeRoute);

app.use(errController.get404Page);

exports.app = functions.https.onRequest(app);