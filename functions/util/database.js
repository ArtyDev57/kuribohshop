const admin = require('firebase-admin');
const functions = require('firebase-functions');

const firebaseConfig = {
    apiKey: "INSERT_YOURS_HERE",
    authDomain: "INSERT_YOURS_HERE",
    databaseURL: "INSERT_YOURS_HERE",
    projectId: "INSERT_YOURS_HERE",
    storageBucket: "INSERT_YOURS_HERE",
    messagingSenderId: "INSERT_YOURS_HERE",
    appId: "INSERT_YOURS_HERE"
};

admin.initializeApp(firebaseConfig);

let db = admin.firestore();

module.exports = db;