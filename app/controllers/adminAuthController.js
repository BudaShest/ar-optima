const bcrypt = require('bcrypt');
const connection = require('../../db/connect');

const User = require('../models/user');

const userWorker = new User(connection);

module.exports.getForm = async function (request,response){
    response.render('admin-auth.hbs',{

    })
}

module.exports.adminAuth = async function (request,response){
    let currentUser = await userWorker.searchUser(request.body.adminLogin);
    if(currentUser){
        if(bcrypt.compareSync(request.body.adminPassword, currentUser.password)){
            if(currentUser.role_id === 3){
                request.session.isAdminAuth = true;
                response.redirect('/admin')
            }else{
                response.redirect('/admin-auth')
            }
        }else{
            response.redirect('/admin-auth')
        }
    }else{
        response.redirect('/admin-auth')
    }
}