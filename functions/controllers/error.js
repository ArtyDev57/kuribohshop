exports.get404Page = (req, res, next) => {
    res.status(404).render('404', {title: "ບໍ່ພົບເຫັນໜ້າທີ່ຄົ້ນຫາ"});
};