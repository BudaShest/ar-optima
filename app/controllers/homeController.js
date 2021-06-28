const bootstrap = require('../../bootstrap');

const employeeWorker = bootstrap.employeeWorker;
const productWorker = bootstrap.productWorker;
const serviceWorker = bootstrap.serviceWorker;
const userWorker = bootstrap.userWorker;

//Контроллер для главной страницы
module.exports.index =async function (request,response) {
    let mainEmployers =await employeeWorker.getMainEmployers();
    let topProducts = await productWorker.getTopProducts();
    let topServices = await serviceWorker.getMainServices();

    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('index.hbs',{
            mainEmployers:mainEmployers,
            topProducts:topProducts,
            topServices:topServices,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('index.hbs',{
            mainEmployers:mainEmployers,
            topProducts:topProducts,
            topServices:topServices
        })
    }

}