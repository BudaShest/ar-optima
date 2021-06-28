const bootstrap = require('../../bootstrap');

const employeeWorker = bootstrap.employeeWorker;
const userWorker = bootstrap.userWorker;

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