const connection = require('../../db/connect');

const Service = require('../models/service');
const Product = require('../models/product');

const serviceWorker = new Service(connection);
const productWorker = new Product(connection);

module.exports.getService = async function (request,response){
    let service =await serviceWorker.getService(request.query.serviceId);
    let restServices = await serviceWorker.getRestServices(request.query.serviceId);
    let restProducts = await productWorker.getAllProducts();

    response.render('service.hbs',{
        service:service[0],
        restServices:restServices,
        restProducts:restProducts
    });
}