const connection = require('../../db/connect');

const Employee = require('../models/employee');
const Product = require('../models/product');
const Service = require('../models/service');
const User = require('../models/user');

const employeeWorker = new Employee(connection);
const productWorker = new Product(connection);
const serviceWorker = new Service(connection);
const userWorker = new User(connection);

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