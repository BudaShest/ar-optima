const connection = require('../../db/connect');

const Employee = require('../models/employee');
const Product = require('../models/product');
const Service = require('../models/service');

const employeeWorker = new Employee(connection);
const productWorker = new Product(connection);
const serviceWorker = new Service(connection);

//Контроллер для главной страницы
module.exports.index =async function (request,response) {
    let mainEmployers =await employeeWorker.getMainEmployers();
    let topProducts = await productWorker.getAllProducts();
    let topServices = await serviceWorker.getAllServices();

    response.render('index.hbs',{
        mainEmployers:mainEmployers,
        topProducts:topProducts,
        topServices:topServices
    })
}