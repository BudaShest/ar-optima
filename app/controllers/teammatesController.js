const connection = require('../../db/connect');

const Employee = require('../models/employee');
const User = require('../models/user');

const employeeWorker = new Employee(connection);
const userWorker = new User(connection);

module.exports.getAllEmployers = async function (request,response){
    let mainEmployers =await employeeWorker.getMainEmployers();
    let restEmployers = await employeeWorker.getRestEmployers();

    if(request.session.authId !== undefined) {
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('teammates.hbs',{
            mainEmployers:mainEmployers,
            restEmployers:restEmployers,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('teammates.hbs',{
            mainEmployers:mainEmployers,
            restEmployers:restEmployers,

        })
    }

}