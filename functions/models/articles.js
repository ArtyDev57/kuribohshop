const db = require('../util/database');

exports.getArticles = () => {
    return db.collection('articles').orderBy('published_date', 'desc').get(snapshot => snapshot);
};

exports.getArticle = (id) => {
    return db.collection('articles').doc(id).get();
}