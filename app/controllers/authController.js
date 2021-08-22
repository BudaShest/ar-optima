const bcrypt = require('bcrypt');
const bootstrap = require('../../bootstrap');

const userWorker = bootstrap.userWorker;

const salt = bcrypt.genSaltSync(10);

//Функция для рендера страницы
module.exports.getForm = async function (request,response){
    if(request.session.authError){
        let authorizedUser = userWorker.getUser(request.session.authId);
        response.render('auth.hbs',{ //TODO странный момент
            authError:request.session.authError,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
        delete request.session.authError;
    }else if(request.session.regError){
        response.render('auth.hbs',{
            regError:request.session.regError,
        })
    }
    else{
        response.render('auth.hbs',{

        })
    }

    if(request.session.regError){
        delete request.session.regError;
    }
    if(request.session.authError){
        delete request.session.authError;
    }
}

//Функция для регистрации
module.exports.register = async function (request, response){
    const regLogin = request.body.regLogin.trim();
    const regEmail = request.body.regEmail.trim();
    const regPassword = request.body.regPassword.trim();
    const regPasswordConfirm = request.body.regPasswordConfirm.trim();
    let regAvatar = "def-avatar.png";

    if(request.file != undefined){
        regAvatar = request.file.filename;
    }

    let allUserNames = await userWorker.getAllUserNames();
    allUserNames = allUserNames.map(item=>item.login);

    let allUserEmails = await userWorker.getAllUserEmails();
    allUserEmails = allUserEmails.map(item=>item.email);

    if(!allUserNames.includes(regLogin)){
        if(!allUserEmails.includes(regEmail)){
            let passRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
            if(passRegExp.test(regPassword)){
                if(regPassword === regPasswordConfirm){
                    const resPassword = bcrypt.hashSync(regPassword,salt);
                    await userWorker.insertUser(regLogin, resPassword,regAvatar,regEmail);
                    response.redirect('/auth#auth-login');
                }else{
                    request.session.regError = 'Пароли не совпадают!';
                    response.redirect('/auth#auth-register');
                }
            }else{
                request.session.regError = 'Пароль должен быть >= 6 символов, иметь хотя бы одну заглавную латинскую букву, одну цифры и один спец. символ.';
                response.redirect('/auth#auth-register');
            }
        }else{
            request.session.regError = 'Данный email уже занят!';
            response.redirect('/auth#auth-register');
        }
    }else{
        request.session.regError = 'Данный логин уже занят!';
        response.redirect('/auth#auth-register');
    }

    console.log(request.session);
}

//Функция для авторизации
module.exports.login = async function (request,response){
    const logLogin = request.body.logLogin;
    const logPassword = request.body.logPassword;

    const currentUser =await userWorker.searchUser(logLogin);
    if(currentUser){
        if(bcrypt.compareSync(logPassword,currentUser.password)){
            request.session.authId = currentUser.id;
            if(request.session.authError){
                delete request.session.authError;
            }
            response.redirect('/');
        }else{
            request.session.authError = 'Неправильный пароль!';
            response.redirect('/auth#auth-login');
        }
    }else{
        request.session.authError = 'Нет такого пользователя!';
        response.redirect('/auth#auth-login');
    }
}