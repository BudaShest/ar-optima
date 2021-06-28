module.exports.exit = async function (request,response){
    if(request.session.authId){
        delete request.session.authId;
    }
    response.redirect('/');
}