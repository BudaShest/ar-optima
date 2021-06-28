const bootstrap = require('../../bootstrap');

const employeeWorker = bootstrap.employeeWorker;
const productWorker = bootstrap.productWorker;
const userWorker = bootstrap.userWorker;

module.exports.getTeammate = async function (request,response){
    let teammate =await employeeWorker.getEmployer(request.query.teammateId);
    let productsByAuthor = await productWorker.getProductsByAuthor(request.query.teammateId);


    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        response.render('teammate.hbs',{
            teammate:teammate,
            productsByAuthor:productsByAuthor,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('teammate.hbs',{
            teammate:teammate,
            productsByAuthor:productsByAuthor
        })
    }
}