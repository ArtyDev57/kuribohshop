const db = require('../util/database');

exports.getProducts = () => {
    return db.collection('products').orderBy('release_date', 'desc').get().then(snapshop => snapshop);
};

exports.getProductsByBrand = (brand) => {
    return db.collection('products').where('brand_url', '==', brand).orderBy('release_date', 'desc').get().then(snapshop => snapshop);
}

exports.getProduct = (id) => {
    return db.collection('products').doc(id).get();
}