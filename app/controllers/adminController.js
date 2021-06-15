const connection = require('../../db/connect');

const Employee = require('../models/employee');
const Position = require('../models/position');
const User = require('../models/user');
const Product = require('../models/product');

const employeeWorker = new Employee(connection);
const positionWorker = new Position(connection);
const userWorker = new User(connection);
const productWorker = new Product(connection);


module.exports.getPanel=async function (request,response){
    let employers =await employeeWorker.getAllEmployers();
    let positions = await positionWorker.getAllPositions();
    let users = await userWorker.getAllUsers();
    let products = await productWorker.getAllProducts();

    response.render('admin-panel.hbs',{
        allEmployers:employers,
        allPositions:positions,
        allUsers:users,
        allProducts:products
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
    response.redirect('/admin');
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
    response.redirect('/admin');
}

module.exports.addProduct = async function (request, response){
    const name = request.body.productName;
    const secondName = request.body.productSecondName;
    const description = request.body.productDescription;
    const authorId = request.body.productAuthor;
    const price = request.body.productText;
    let fileNames = request.files.map(item=>item.filename);
    await productWorker.addProduct(name,description,authorId,price,secondName,fileNames);
    response.redirect('/admin');
}