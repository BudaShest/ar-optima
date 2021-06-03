const Employee = require('../models/employee');
const connection = require('../../db/connect');
const employeeWorker = new Employee(connection);

module.exports.index = function (request,response) {
    // employeeWorker.getAllEmployers().then(data=>console.log(data));
    employeeWorker.getMainEmployers().then(data=>{
        response.render('index.hbs',{
           mainEmployers:data,
        });
    });

}