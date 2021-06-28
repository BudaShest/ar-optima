const bcrypt = require('bcrypt');
const bootstrap = require('../../bootstrap');


const userWorker = bootstrap.userWorker;

const salt = bcrypt.genSaltSync(10);

module.exports.getPersonal = async function (request,response){

    if(request.session.authId !== undefined){
        let currentUser =await userWorker.getUser(request.session.authId);
        response.render('personal.hbs',{
            currentUserLogin:currentUser.login,
            currentUserAvatar:currentUser.avatar,
            currentUserRoleName:currentUser.name
        })
    }else{
        response.redirect('/auth');
    }

}

module.exports.updateCurrentUser = async function (request,response){
    const newUserLogin = request.body.currentUserLogin;
    let newUserPassword = request.body.currentUserPassword;

    let currentUser = await userWorker.getUser(request.session.authId);

    let newUserAvatar = currentUser.avatar;

    if(request.file !== undefined){
        newUserAvatar = request.file.filename;
        await userWorker.updateUserAvatar(newUserAvatar, request.session.authId);
    }

    if(newUserLogin !== currentUser.login){
        await userWorker.updateUserLogin(newUserLogin, request.session.authId);
    }
    if(newUserPassword !== ""){
        newUserPassword = bcrypt.hashSync(newUserPassword,salt);
        await userWorker.updateUserPassword(newUserPassword,request.session.authId);
    }

    response.redirect('/personal');
}

module.exports.exit = async function (request,response){
    if(request.session.authId){
        delete request.session.authId;
    }
    response.redirect('/');
}