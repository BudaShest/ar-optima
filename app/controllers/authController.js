const bcrypt = require('bcrypt');
const bootstrap = require('../../bootstrap');



const userWorker = bootstrap.userWorker;

const salt = bcrypt.genSaltSync(10);

module.exports.getForm = async function (request,response){
    if(request.session.authError){
        response.render('auth.hbs',{
            authError:request.session.authError
        })
        delete request.session.authError;
    }else{
        response.render('auth.hbs',{

        })
    }
}

module.exports.register = async function (request, response){
    const regLogin = request.body.regLogin;
    const regPassword = request.body.regPassword;
    let regAvatar = "def-avatar.png";

    if(request.file != undefined){
        regAvatar = request.file.filename;
    }


    const resPassword = bcrypt.hashSync(regPassword,salt);

    await userWorker.insertUser(regLogin, resPassword,regAvatar);
    response.redirect('/');
}

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