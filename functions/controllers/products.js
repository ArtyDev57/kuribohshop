const ProductsDB = require('../models/products');

exports.getProducts = (req, res, next) => {
    const products = [];
    ProductsDB.getProducts().then(
        snapshot => {
            snapshot.forEach(doc => {
                products.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        }
    ).then(() => {
        res.render('products/products-list', {
            pro: products,
            title: 'ໜ້າຫຼັກ',
            path: '/'
        });
    }).catch(err => err);
};

exports.getProductsByBrand = (req, res, next) => {
    const brand = req.params.brand;
    const products = [];
    ProductsDB.getProductsByBrand(brand).then(
        snapshot => {
            if (snapshot.empty) {
                if (brand == 'yugioh' || brand == 'vanguard' || brand == 'pokemon' || brand == 'uno' || brand == 'monopoly' || brand == 'catan') {
                    res.render('products/products-list', {
                        pro: null,
                        title: brand,
                        brand: brand,
                    });
                } else {
                    res.status(404).render('404', {
                        title: "ບໍ່ພົບເຫັນໜ້າທີ່ຄົ້ນຫາ"
                    });
                }
            } else {
                snapshot.forEach(doc => {
                    products.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
            }
        }
    ).then(() => {
        res.render('products/products-list', {
            pro: products,
            title: products[0].data['brand'],
            brand: products[0].data['brand'],
            path: '/brand/' + products[0].data['brand_url']
        });
    }).catch(err => err);
}

exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    ProductsDB.getProduct(id).then( doc => {
        if (!doc.exists) {
            res.status(404).render('404', {
                title: "ບໍ່ພົບເຫັນໜ້າທີ່ຄົ້ນຫາ"
            });
        } else {
            const productID = doc.id;
            const product = doc.data();
            const releaseDate = doc.data().release_date.toDate();
            const importDate = doc.data().import_date.toDate();
            res.render('products/product-detail', {
                title: product['name'],
                id: productID,
                pro: product,
                importDate: importDate,
                releaseDate: releaseDate
            });
        }
    }).catch(err => err);
}