const bootstrap = require('../../bootstrap');

const serviceWorker = bootstrap.serviceWorker;
const productWorker = bootstrap.productWorker;
const userWorker = bootstrap.userWorker;
const workWorker = bootstrap.workWorker;

module.exports.getService = async function (request,response){
    let service =await serviceWorker.getService(request.query.serviceId);
    let restServices = await serviceWorker.getRestServices(request.query.serviceId);
    let restProducts = await productWorker.getAllProducts();

    let isSiteDeveloping = service.id == 1;

    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('service.hbs',{
            service:service,
            restServices:restServices,
            restProducts:restProducts,
            isAuthorized:true,
            isSiteDeveloping:isSiteDeveloping,
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

module.exports.addWork = async function(request,response){
    if(request.session.authId){
        let workDescription = request.body.workDescription;
        console.log(request.body.devMedia);
        if (request.body.isNewServiceWork){
            workDescription = '';
            workDescription += "Тип сайта: " + request.body.devType + "\n";
            workDescription += 'Цель и тематика: ' + request.body.devDescription + "\n";
            workDescription += 'Коммерция: ' + request.body.devSelling + "\n";
            workDescription += 'Тип дизайна: ' + request.body.devDesign + "\n";
            workDescription += 'Медиа: ' + request.body.devMedia + "\n";
            workDescription += 'Наличие домена: ' + request.body.devDomen + "\n";
            workDescription += 'Продвижение: ' + request.body.devPromotion + "\n";
            workDescription += 'Деадлайн: ' + request.body.devDeadline + "\n";
            console.log(workDescription);
        }
        await workWorker.insertWork(request.session.authId,null, request.body.workAddBtn, workDescription);
    }
    response.redirect('/personal');
}

