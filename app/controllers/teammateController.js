const connection = require('../../db/connect');

const Employee = require('../models/employee');

const employeeWorker = new Employee(connection);

module.exports.getTeammate = async function (request,response){
    console.log(request.query);

    let teammate =await employeeWorker.getEmployer(request.query.teammateId);

    response.render('teammate.hbs',{
        teammate:teammate[0]
    })
}