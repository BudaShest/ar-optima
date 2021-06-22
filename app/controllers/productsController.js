const connection = require('../../db/connect');

const Product = require('../models/product');
const User = require('../models/user');

const productWorker = new Product(connection);
const userWorker = new User(connection);

module.exports.getAllProducts = async function (request,response){
    let specialProducts = await productWorker.getSpecialProducts();
    let restProducts = await productWorker.getNotSpecialProducts();


    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('products.hbs',{
            specialProducts:specialProducts,
            restProducts:restProducts,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('products.hbs',{
            specialProducts:specialProducts,
            restProducts:restProducts
        })
    }
}