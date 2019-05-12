const db = require('../util/database');

exports.getArticles = async (req, res ,next) => {
    try {
        const snapshot = await db.collection('articles').orderBy('published_date', 'desc').get();
        const articles = [];
        snapshot.forEach(doc => {
            articles.push({
                id: doc.id,
                data: doc.data()
            });
        });
        console.log(articles[0].data['title']);
        res.render('articles/articles-list', {
            title: 'ບົດຄວາມ',
            ar: articles,
            path: '/article'
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('articles').doc(id).get();
        const article = doc.data()
        const publishedDate = doc.data().published_date;
        console.log(article['title']);
        res.render('articles/article-detail', {
           title: article['title'],
           ar: article,
           publishedDate: publishedDate,
           path: '/article/'+article['id']
        });
    } catch (err) {

    }
}