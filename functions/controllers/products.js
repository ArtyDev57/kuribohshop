const db = require('../util/database');

exports.getProducts = async (req, res, next) => {
    try {
        const snapshot = await db.collection('products').orderBy('release_date', 'desc').get();
        const products = [];
        snapshot.forEach(doc => {
            products.push({
                id: doc.id,
                data: doc.data()
            });
        });
        console.log(products[0].data['name']);
        res.render('products/products-list', {
            pro: products,
            title: 'ໜ້າຫຼັກ',
            path: '/'
        });
    } catch(err) {
        console.log(err);
    }
};

exports.getProductsByBrand = async (req, res, next) => {
    try {
        const brand = req.params.brand;
        const snapshot = await db.collection('products').where('brand_url','==', brand).orderBy('release_date', 'desc').get();
        let products = [];
        if (snapshot.empty) {
            products = undefined;
            res.render('products/products-list', {
                pro: null,
                title: brand,
                brand: brand,
            });
        } else {
        snapshot.forEach(doc => {
            products.push({
                id: doc.id,
                data: doc.data()
            });
            });
        }
        console.log(products[0].data['name']);
        res.render('products/products-list', {
            pro: products,
            title: products[0].data['brand'],
            brand: products[0].data['brand'],
            path: '/brand/'+products[0].data['brand_url']
        });
    } catch(err) {
        console.log(err);
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('products').doc(id).get();
        const productID = doc.id;
        const product = doc.data();
        const releaseDate = doc.data().release_date.toDate();
        const importDate = doc.data().import_date.toDate();
        console.log(productID + ': '+ product['name'] + '=> '+ releaseDate);
        res.render('products/product-detail', {
            title: product['name'],
            id: productID,
            pro: product,
            importDate: importDate,
            releaseDate: releaseDate
        });
    } catch(err) {
        console.log(err);
    }
}