const bootstrap = require('../../bootstrap');

const serviceWorker = bootstrap.serviceWorker;
const productWorker = bootstrap.productWorker;
const userWorker = bootstrap.userWorker;
const workWorker = bootstrap.workWorker;

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