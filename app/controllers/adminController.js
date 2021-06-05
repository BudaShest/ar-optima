const Employee = require('../models/employee');
const Position = require('../models/position');
const User = require('../models/user');
const Product = require('../models/product');

const connection = require('../../db/connect');
const employeeWorker = new Employee(connection);
const positionWorker = new Position(connection);
const userWorker = new User(connection);
const productWorker = new Product(connection);

module.exports.getPanel= function (request,response){
    employeeWorker.getAllEmployers().then(employers=>{
        return employers;
    }).then(employers=>{
        positionWorker.getAllPositions().then(positions=>{
            return positions;
        }).then(positions=>{
            userWorker.getAllUsers().then(users=>{
                return users;
            }).then(users=>{
                productWorker.getAllProducts().then(products=>{
                    response.render('admin-panel.hbs',{
                            allEmployers:employers,
                            allPositions:positions,
                            allUsers:users,
                            allProducts:products,
                    })
                })
            })
        })
    });
}

module.exports.addEmployer = function (request,response){
    const firstname = request.body.employFirstname;
    const surname = request.body.employSurname;
    const age = request.body.employAge;
    const positionId = request.body.employPosition;
    const description = request.body.employDescription;
    const stack = request.body.employStack;
    employeeWorker.addEmployer(firstname,surname,age,positionId,description,stack)
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    response.redirect('/admin');
}