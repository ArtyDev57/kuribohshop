const admin = require('firebase-admin');
const functions = require('firebase-functions');

const firebaseConfig = {
    apiKey: "AIzaSyAAiQ5RSc6jPLSrruA_CgIOukCNUUxZhxU",
    authDomain: "kuribohshop.firebaseapp.com",
    databaseURL: "https://kuribohshop.firebaseio.com",
    projectId: "kuribohshop",
    storageBucket: "kuribohshop.appspot.com",
    messagingSenderId: "1057846715671",
    appId: "1:1057846715671:web:8fe7e7624a0677a9"
};

admin.initializeApp(firebaseConfig);

let db = admin.firestore();

module.exports = db;