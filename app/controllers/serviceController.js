const connection = require('../../db/connect');

const Service = require('../models/service');

const serviceWorker = new Service(connection);

module.exports.getService = async function (request,response){
    let service =await serviceWorker.getService(request.query.serviceId);

    response.render('service.hbs',{
        service:service[0]
    });
}