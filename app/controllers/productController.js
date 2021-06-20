const connection = require('../../db/connect');

const Product = require('../models/product');
const Service = require('../models/service');

const productWorker = new Product(connection);
const serviceWorker = new Service(connection);

module.exports.getProduct = async function (request, response){
    let product = await productWorker.getProduct(request.query.productId);
    let restServices = await serviceWorker.getAllServices();
    let restProducts = await productWorker.getRestProducts(request.query.productId);

    response.render('product.hbs',{
        product:product[0],
        restProducts:restProducts,
        restServices:restServices
    })
}