const bootstrap = require('../../bootstrap');

const commentWorker = bootstrap.commentWorker;

module.exports.addComment = async function (request,response){
    if(request.session.authId){
        await commentWorker.addComment(request.session.authId,request.body.commentAddBtn,request.body.commentText);
    }
    response.redirect(`/product?productId=${request.body.commentAddBtn}`);
}