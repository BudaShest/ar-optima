const bcrypt = require('bcrypt');
const bootstrap = require('../../bootstrap');


const userWorker = bootstrap.userWorker;
const productWorker = bootstrap.productWorker;
const onWorkWorker = bootstrap.workWorker;

const salt = bcrypt.genSaltSync(10);

module.exports.getPersonal = async function (request,response){

    if(request.session.authId !== undefined){
        let authorizedUser =await userWorker.getUser(request.session.authId);
        let userPurchases = await productWorker.getPurchasesByBuyer(request.session.authId);
        let userWorks = await onWorkWorker.getWorksByCustomer(request.session.authId);

        if(request.session.updateError){
            response.render('personal.hbs',{
                currentUserLogin:authorizedUser.login,
                currentUserAvatar:authorizedUser.avatar,
                currentUserRoleName:authorizedUser.name,
                currentUserEmail:authorizedUser.email,
                userPurchases:userPurchases,
                userWorks:userWorks,
                isAuthorized:true,
                authUserAvatar:authorizedUser.avatar,
                authUserLogin:authorizedUser.login,
                invoiceError:request.session.updateError
            })
        }else{
            response.render('personal.hbs',{
                currentUserLogin:authorizedUser.login,
                currentUserAvatar:authorizedUser.avatar,
                currentUserRoleName:authorizedUser.name,
                currentUserEmail:authorizedUser.email,
                userWorks:userWorks,
                userPurchases:userPurchases,
                isAuthorized:true,
                authUserAvatar:authorizedUser.avatar,
                authUserLogin:authorizedUser.login,
            })
        }
    }else{
        response.redirect('/auth');
    }


    if(request.session.updateError){
        delete request.session.updateError;
    }
}

module.exports.updateUserAvatar = async function (request,response){
    let currentUser = await userWorker.getUser(request.session.authId);
    let newUserAvatar = currentUser.avatar;

    if(request.file !== undefined){
        newUserAvatar = request.file.filename;
        await userWorker.updateUserAvatar(newUserAvatar, request.session.authId);
    }


    response.redirect('/personal');
}

module.exports.updateUserLogin =async function (request, response){
    const newUserLogin = request.body.currentUserLogin;
    let currentUser = await userWorker.getUser(request.session.authId);
    let allUserLogins = await userWorker.getAllUserNames();
    allUserLogins = allUserLogins.map(item=>item.login);

    if(newUserLogin !== currentUser.login){
        if(!allUserLogins.includes(newUserLogin)){
            await userWorker.updateUserLogin(newUserLogin, request.session.authId);
        }else{
            request.session.updateError = 'Данный логин уже занят!';
        }
    }else{
        request.session.updateError = 'Новый логин должен отличаться от предыдущего!';
    }

    response.redirect('/personal');
}

module.exports.updateUserEmail = async function (request,response){
    const newUserEmail = request.body.currentUserEmail;
    let currentUser = await userWorker.getUser(request.session.authId);

    let allUserEmails = await userWorker.getAllUserEmails();
    allUserEmails = allUserEmails.map(item=>item.email);

    if(newUserEmail !== currentUser.email){
        if(!allUserEmails.includes(newUserEmail)){
            await userWorker.updateUserEmail(newUserEmail, request.session.authId);
        }else{
            request.session.updateError = 'Данная почта уже занята!';
        }
    }else{
        request.session.updateError = 'Новый адрес почти должен отличаться от предыдущего!';
    }

    response.redirect('/personal');
}

module.exports.updateUserPassword = async function (request,response){
    let newUserPassword = request.body.currentUserPassword;
    let currentUser = await userWorker.getUser(request.session.authId);

    let passRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    if(passRegExp.test(newUserPassword)){
        newUserPassword = bcrypt.hashSync(newUserPassword,salt);
        await userWorker.updateUserPassword(newUserPassword,request.session.authId);
    }else{
        request.session.updateError = 'Пароль должен быть >= 6 символов, иметь хотя бы одну заглавную латинскую букву, одну цифры и один спец. символ.';
    }

    response.redirect('/personal');
}

module.exports.exit = async function (request,response){
    if(request.session.authId){
        delete request.session.authId;
    }
    response.redirect('/');
}