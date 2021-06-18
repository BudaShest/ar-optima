const connection = require('../../db/connect');

const Employee = require('../models/employee');

const employeeWorker = new Employee(connection);

module.exports.getAllEmployers = async function (request,response){
    let mainEmployers =await employeeWorker.getMainEmployers();
    let restEmployers = await employeeWorker.getRestEmployers();

    response.render('teammates.hbs',{
        mainEmployers:mainEmployers,
        restEmployers:restEmployers
    })
}