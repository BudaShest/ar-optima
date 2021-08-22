const bootstrap = require('../../bootstrap');


const productWorker = bootstrap.productWorker;
const serviceWorker = bootstrap.serviceWorker;
const userWorker = bootstrap.userWorker;
const commentWorker = bootstrap.commentWorker;


module.exports.getProduct = async function (request, response){
    let product = await productWorker.getProduct(request.query.productId);
    let comments = await commentWorker.getCommentsByProduct(request.query.productId);
    let productDemo = await productWorker.getDemo(product.id);
    let restServices = await serviceWorker.getAllServices();
    let restProducts = await productWorker.getRestProducts(request.query.productId);

    if(productDemo){
        product.productDemoPath = productDemo.path + '/' + productDemo.model;
    }

    if(request.session.authId !== undefined){
        let authorizedUser = await userWorker.getUser(request.session.authId);
        product.isAuthorized = true;
        response.render('product.hbs',{
            product:product,
            comments:comments,
            restProducts:restProducts,
            restServices:restServices,
            isAuthorized:true,
            authUserAvatar:authorizedUser.avatar,
            authUserLogin:authorizedUser.login
        })
    }else{
        response.render('product.hbs',{
            product:product,
            comments:comments,
            restProducts:restProducts,
            restServices:restServices
        })
    }
}

module.exports.buy = async function (request,response){

    if(request.session.authId){
        await productWorker.buyProduct(request.session.authId,request.body.productBuyBtn);
        let currentUser = await userWorker.getUser(request.session.authId);
        let currentUserEmail = currentUser.email;

    }
    response.redirect('/personal');
}
