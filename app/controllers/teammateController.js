const connection = require('../../db/connect');

const Employee = require('../models/employee');
const Product = require('../models/product');

const employeeWorker = new Employee(connection);
const productWorker = new Product(connection);

module.exports.getTeammate = async function (request,response){
    let teammate =await employeeWorker.getEmployer(request.query.teammateId);
    let productsByAuthor = await productWorker.getProductsByAuthor(request.query.teammateId);

    response.render('teammate.hbs',{
        teammate:teammate[0],
        productsByAuthor:productsByAuthor
    })
}