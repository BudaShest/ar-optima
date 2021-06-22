const connection = require('../../db/connect');

const Product = require('../models/product');
const Service = require('../models/service');
const User = require('../models/user');

const productWorker = new Product(connection);
const serviceWorker = new Service(connection);
const userWorker = new User(connection);

module.exports.getProduct = async function (request, response){
    let product = await productWorker.getProduct(request.query.productId);
    let restServices = await serviceWorker.getAllServices();
    let restProducts = await productWorker.getRestProducts(request.query.productId);



    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('product.hbs',{
            product:product,
            restProducts:restProducts,
            restServices:restServices,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('product.hbs',{
            product:product,
            restProducts:restProducts,
            restServices:restServices
        })
    }
}