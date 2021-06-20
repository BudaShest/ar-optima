const connection = require('../../db/connect');

const Employee = require('../models/employee');
const Position = require('../models/position');
const User = require('../models/user');
const Product = require('../models/product');
const Service = require('../models/service');

const employeeWorker = new Employee(connection);
const positionWorker = new Position(connection);
const userWorker = new User(connection);
const productWorker = new Product(connection);
const serviceWorker = new Service(connection);

module.exports.getPanel=async function (request,response){
    let employers =await employeeWorker.getAllEmployers();
    let positions = await positionWorker.getAllPositions();
    let users = await userWorker.getAllUsers();
    let products = await productWorker.getAllProducts();
    let services = await serviceWorker.getAllServices();

    response.render('admin-panel.hbs',{
        allEmployers:employers,
        allPositions:positions,
        allUsers:users,
        allProducts:products,
        allServices:services
    })
}

module.exports.addEmployer =async function (request,response){
    const firstname = request.body.employFirstname;
    const surname = request.body.employSurname;
    const age = request.body.employAge;
    const positionId = request.body.employPosition;
    const description = request.body.employDescription;
    const stack = request.body.employStack;
    let avatar = 'employee-def.png';

    if(request.file != undefined){
        avatar = request.file.filename;
    }

    await employeeWorker.addEmployer(firstname,surname,age,positionId,avatar,description,stack);
    response.redirect('/admin#admin-employers');
}

module.exports.addPosition = async function (request, response){
    const name = request.body.positionName;
    let icon = "dev-icon.png";
    let isMain = request.body.positionIsMain;

    isMain = isMain == "on"?1:0;

    if(request.file != undefined){
        icon = request.file.filename;
    }


    await positionWorker.addPosition(name,icon,isMain);
    response.redirect('/admin#admin-positions');
}

module.exports.addProduct = async function (request, response){
    const name = request.body.productName;
    const secondName = request.body.productSecondName;
    const description = request.body.productDescription;
    const authorId = request.body.productAuthor;
    const price = request.body.productText;
    let fileNames = request.files.map(item=>item.filename);
    await productWorker.addProduct(name,description,authorId,price,secondName,fileNames);
    response.redirect('/admin#admin-products');
}

module.exports.addService = async function (request, response){
    const header = request.body.serviceHeader;
    const description = request.body.serviceDescription;
    let image = "def-service.jpg";
    const price = request.body.servicePrice;

    if(request.file != undefined){
        image = request.file.filename;
    }

    await serviceWorker.addService(header,description,image,price);
    response.redirect('/admin#admin-services');

}

module.exports.moderate = async function (request,response){
    if(request.body.deleteById !== undefined){
        switch (request.body.moderateContext) {
            case "admin-employers":
                await employeeWorker.deleteEmployer();
                response.redirect('/admin#admin-employers');
                break;
            case "admin-positions":
                await positionWorker.deletePosition();
                response.redirect('/admin#admin-positions');
                break;
            case "admin-users":
                await userWorker.deleteUser();
                response.redirect('/admin#admin-users');
                break;
            case "admin-products":
                await productWorker.deleteProduct(request.body.deleteById);
                response.redirect('/admin#admin-products');
                break;
        }
    }else if(request.body.updateById !== undefined){

    }

}