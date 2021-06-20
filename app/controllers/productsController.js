const connection = require('../../db/connect');

const Product = require('../models/product');

const productWorker = new Product(connection);

module.exports.getAllProducts = async function (request,response){
    let specialProducts = await productWorker.getSpecialProducts();
    let restProducts = await productWorker.getNotSpecialProducts();

    response.render('products.hbs',{
        specialProducts:specialProducts,
        restProducts:restProducts
    })
}