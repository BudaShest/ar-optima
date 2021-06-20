const connection = require('../../db/connect');

const Product = require('../models/product');

const productWorker = new Product(connection);

module.exports.getProduct = async function (request, response){

    let product = await productWorker.getProduct(request.query.productId);

    response.render('product.hbs',{
        product:product[0]
    })
}