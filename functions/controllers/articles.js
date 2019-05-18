const ArticlesDB = require('../models/articles');

exports.getArticles = (req, res, next) => {
    const articles = [];
    ArticlesDB.getArticles().then(
        snapshot => {
            snapshot.forEach(doc => {
                articles.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        }
    ).then(() => {
        res.render('articles/articles-list', {
            title: 'ບົດຄວາມ',
            ar: articles,
            path: '/article'
        })
    }).catch(err => err);
}

exports.getArticle = (req, res, next) => {
    const id = req.params.id;
    ArticlesDB.getArticle(id).then(doc => {
        if (!doc.exists) {
            res.status(404).render('404', {
                title: "ບໍ່ພົບເຫັນໜ້າທີ່ຄົ້ນຫາ"
            });
        } else {
            const article = doc.data()
            const publishedDate = doc.data().published_date;
            res.render('articles/article-detail', {
                title: article['title'],
                ar: article,
                publishedDate: publishedDate,
                path: '/article/' + article['id']
            });
        }
    }).catch(err => err);
}