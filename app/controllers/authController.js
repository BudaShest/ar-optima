const bcrypt = require('bcrypt');
const connection = require('../../db/connect');

const User = require('../models/user');

const userWorker = new User(connection);

const salt = bcrypt.genSaltSync(10);

module.exports.getForm = async function (request,response){

    response.render('auth.hbs',{

    })
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

    if(bcrypt.compareSync(logPassword,currentUser.password)){
        request.session.authId = currentUser.id;
    }
    response.redirect('/');

}