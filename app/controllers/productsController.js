const connection = require('../../db/connect');

const Product = require('../models/product');

const productWorker = new Product(connection);

module.exports.getAllProducts = async function (request,response){
    let allProducts = await productWorker.getAllProducts();

    response.render('products.hbs',{
        allProducts:allProducts
    })
}