const connection = require('../../db/connect');

const Service = require('../models/service');
const Product = require('../models/product');
const User = require('../models/user');
const OnWork = require('../models/onWork');

const serviceWorker = new Service(connection);
const productWorker = new Product(connection);
const userWorker = new User(connection);
const workWorker = new OnWork(connection);

module.exports.getService = async function (request,response){
    let service =await serviceWorker.getService(request.query.serviceId);
    let restServices = await serviceWorker.getRestServices(request.query.serviceId);
    let restProducts = await productWorker.getAllProducts();



    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('service.hbs',{
            service:service,
            restServices:restServices,
            restProducts:restProducts,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        });
    }else{
        response.render('service.hbs',{
            service:service,
            restServices:restServices,
            restProducts:restProducts
        });
    }
}

module.exports.addWork = async function (request,response){
    if(request.session.authId){
        await workWorker.insertWork(request.session.authId,null, request.body.workAddBtn, request.body.workDescription);
    }

}