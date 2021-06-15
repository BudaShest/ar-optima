const Employee = require('../models/employee');
const connection = require('../../db/connect');
const employeeWorker = new Employee(connection);

module.exports.index =async function (request,response) {
    // employeeWorker.getMainEmployers().then(data=>{
    //     response.render('index.hbs',{
    //        mainEmployers:data,
    //     });
    // });

    let mainEmployers =await employeeWorker.getMainEmployers();
    response.render('index.hbs',{
        mainEmployers:mainEmployers
    })
}