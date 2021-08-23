//Функция для удаления файла
const FILE_PATH = 'C:\\Users\\1644853\\Desktop\\ar-optima\\public\\img\\uploads\\';
function deleteImg(img){
    if(img !== "def-avatar.png" && img !== "dev-icon.png" && img !== 'def-employer.png' && img !== "def-service.jpg"){
        fs.unlink(FILE_PATH + img, (err)=>{
            if(err){
                console.error(err);
            }else{
                console.log('Файл:' + img + " был успешно удалён!");
            }
        });
    }
}


const bootstrap = require('../../bootstrap');
const fs = require('fs');

const employeeWorker = bootstrap.employeeWorker;
const positionWorker = bootstrap.positionWorker;
const userWorker = bootstrap.userWorker;
const productWorker = bootstrap.productWorker;
const serviceWorker = bootstrap.serviceWorker;
const workWorker = bootstrap.workWorker;
const commentWorker = bootstrap.commentWorker;

module.exports.getPanel=async function (request,response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    let employers =await employeeWorker.getAllEmployers();
    let positions = await positionWorker.getAllPositions();
    let users = await userWorker.getAllUsers();
    let products = await productWorker.getAllProducts();
    let services = await serviceWorker.getAllServices();
    let works = await workWorker.getAllWorks();
    let statuses = await workWorker.getAllStatuses();


    if(request.session.updatedEmployer !== undefined){
        console.log(request.session.updatedEmployer);
        response.render('admin-panel.hbs',{
            allEmployers:employers,
            allPositions:positions,
            allUsers:users,
            allProducts:products,
            allServices:services,
            allWorks:works,
            allStatuses:statuses,
            //Форма добавления персонала
            employFirstname:request.session.updatedEmployer.firstname,
            employSurname:request.session.updatedEmployer.surname,
            employAge:request.session.updatedEmployer.age,
            employDescription:request.session.updatedEmployer.description,
            employStack:request.session.updatedEmployer.technology_stack,
            isNewPosition:true,
            employPositionId:request.session.updatedEmployer.position_id,
            employPositionName:request.session.updatedEmployer.name,
            isNewAvatar:true,
            employAvatar:request.session.updatedEmployer.avatar
        })
    }else if(request.session.updatedPosition !== undefined){
        response.render('admin-panel.hbs',{
            allEmployers:employers,
            allPositions:positions,
            allUsers:users,
            allProducts:products,
            allServices:services,
            allWorks:works,
            allStatuses:statuses,
            //Форма добавления вакансии
            positionName:request.session.updatedPosition.name,
            positionIcon:request.session.updatedPosition.icon,
            positionIsMain:request.session.updatedPosition.is_main,
            isNewIcon:true
        })
    }else if(request.session.updatedUser !== undefined){
        let allUserProducts = await productWorker.getPurchasesByBuyer(request.session.updatedUser.id);
        let allUserReviews = await commentWorker.getCommentsByAuthor(request.session.updatedUser.id);

        let isBanned = false;
        let bannedIds = await userWorker.getBannedIds();
        bannedIds = bannedIds.map(item=>item['user_id']);

        if(bannedIds.includes(request.session.updatedUser.id)){
            isBanned = true;
        }

        response.render('admin-panel.hbs', {
            allEmployers: employers,
            allPositions: positions,
            allUsers: users,
            allProducts: products,
            allServices: services,
            allWorks:works,
            allStatuses:statuses,
            //Форма управления пользователями
            userAvatar: request.session.updatedUser.avatar,
            userLogin: request.session.updatedUser.login,
            userEmail:request.session.updatedUser.email,
            userRoleName: request.session.updatedUser.name,
            userId: request.session.updatedUser.id,
            userPurchases: allUserProducts,
            userReviews: allUserReviews,
            isBanned:isBanned
        })
    }else if(request.session.updatedProduct !== undefined){
        response.render('admin-panel.hbs',{
            allEmployers: employers,
            allPositions: positions,
            allUsers: users,
            allProducts: products,
            allServices: services,
            allWorks:works,
            allStatuses:statuses,
            //Форма добавления товаров
            productName:request.session.updatedProduct.name,
            productSecondName:request.session.updatedProduct.second_name,
            productDescription:request.session.updatedProduct.description,
            isNewAuthor:true,
            oldAuthorId:request.session.updatedProduct.author_id,
            oldAuthorSurname:request.session.updatedProduct.surname,
            oldAuthorFirstname:request.session.updatedProduct.firstname,
            productPrice:request.session.updatedProduct.price
        })
    }else if(request.session.updatedService !== undefined){
        response.render('admin-panel.hbs',{
            allEmployers: employers,
            allPositions: positions,
            allUsers: users,
            allProducts: products,
            allServices: services,
            allWorks:works,
            allStatuses:statuses,
            //Форма добавления услуг
            serviceHeader:request.session.updatedService.header,
            serviceDescription:request.session.updatedService.description,
            isNewImage:true,
            serviceOldImage:request.session.updatedService.image,
            servicePrice:request.session.updatedService.price
        })
    }else if(request.session.updatedWork !== undefined){
        response.render('admin-panel.hbs',{
            allEmployers: employers,
            allPositions: positions,
            allUsers: users,
            allProducts: products,
            allServices: services,
            allWorks:works,
            allStatuses:statuses,
            //Форма настроек заявки
            workUserAvatar:request.session.updatedWork.user_avatar,
            workUserLogin:request.session.updatedWork.login,
            workAuthorId:request.session.updatedWork.author_id,
            workAuthorAvatar:request.session.updatedWork.employer_avatar,
            workAuthorFirstname:request.session.updatedWork.firstname,
            workAuthorSurname:request.session.updatedWork.surname,
            workStatusId:request.session.updatedWork.status_id,
            workStatusName:request.session.updatedWork.name,
            workDescription:request.session.updatedWork.description
        })
    }
    else{
        response.render('admin-panel.hbs',{
            allEmployers:employers,
            allPositions:positions,
            allUsers:users,
            allProducts:products,
            allServices:services,
            allWorks:works,
            allStatuses:statuses,
        })
    }


}

module.exports.addEmployer =async function (request,response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    const firstname = request.body.employFirstname;
    const surname = request.body.employSurname;
    const age = request.body.employAge;
    const positionId = request.body.employPosition;
    const description = request.body.employDescription;
    const stack = request.body.employStack;
    let avatar = 'def-employer.png';


    if(request.session.updatedEmployer !== undefined){
        if(request.file != undefined){
            avatar = request.file.filename;
        }else{
            let oldEmployer = await employeeWorker.getEmployer(request.session.updatedEmployer.id);
            avatar = oldEmployer.avatar;
        }
    }else{
        if(request.file != undefined){
            avatar = request.file.filename;
        }
    }

    if(request.session.updatedEmployer !== undefined){
        await employeeWorker.updateEmployer(firstname,surname,age,description,avatar,positionId,stack,request.session.updatedEmployer.id);
        delete request.session.updatedEmployer;

    }else{
        await employeeWorker.addEmployer(firstname,surname,age,positionId,avatar,description,stack);
    }
    response.redirect('/admin#admin-employers');
}

module.exports.addPosition = async function (request, response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    const name = request.body.positionName;
    let icon = "dev-icon.png";
    let isMain = request.body.positionIsMain;

    isMain = isMain == "on"?1:0;

    if(request.session.updatedPosition !== undefined){
        if(request.file != undefined){
            icon = request.file.filename;
        }else{
            let oldPosition = await positionWorker.getPosition(request.session.updatedPosition.id);
            icon = oldPosition.icon;
        }
    }else{
        if(request.file != undefined){
            icon = request.file.filename;
        }
    }

    if(request.session.updatedPosition !== undefined){
        await positionWorker.updatePosition(name,icon,isMain,request.session.updatedPosition.id);
        delete request.session.updatedPosition;
    }else{
        await positionWorker.addPosition(name,icon,isMain);
    }
    response.redirect('/admin#admin-positions');
}

module.exports.addProduct = async function (request, response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    const name = request.body.productName;
    const secondName = request.body.productSecondName;
    const description = request.body.productDescription;
    const authorId = request.body.productAuthor;
    const price = request.body.productText;
    let fileNames = request.files.map(item=>item.filename);

    if(request.session.updatedProduct !== undefined){
        await productWorker.updateProduct(name,description,authorId,price,secondName,request.session.updatedProduct.id);
        delete request.session.updatedProduct;
    }else{
        await productWorker.addProduct(name,description,authorId,price,secondName,fileNames);
    }
    response.redirect('/admin#admin-products');
}

module.exports.addService = async function (request, response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    const header = request.body.serviceHeader;
    const description = request.body.serviceDescription;
    let image = "def-service.jpg";
    const price = request.body.servicePrice;


    if(request.session.updatedService !== undefined){
        if(request.file != undefined){
            image = request.file.filename;
        }else{
            let oldService = await serviceWorker.getService(request.session.updatedService.id);
            image = oldService.image;
        }
        await serviceWorker.updateService(header,description,image,price,request.session.updatedService.id);
        delete request.session.updatedService;
    }else{
        if(request.file != undefined){
            image = request.file.filename;
        }
        await serviceWorker.addService(header,description,image,price);
    }


    response.redirect('/admin#admin-services');

}

module.exports.moderate = async function (request,response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    if(request.body.deleteById !== undefined){
        switch (request.body.moderateContext) {
            case "admin-employers":
                let oldEmployer = await employeeWorker.getEmployer(request.body.deleteById);
                let oldImg = oldEmployer.avatar;
                deleteImg(oldImg);
                await employeeWorker.deleteEmployer(request.body.deleteById);
                response.redirect('/admin#admin-employers');
                break;
            case "admin-positions":
                let oldPosition = await positionWorker.getPosition(request.body.deleteById);
                let oldIcon = oldPosition.icon;
                deleteImg(oldIcon);
                await positionWorker.deletePosition(request.body.deleteById);
                response.redirect('/admin#admin-positions');
                break;
            case "admin-users":
                let oldUser = await userWorker.getUser(request.body.deleteById);
                let oldAvatar = oldUser.avatar;
                deleteImg(oldAvatar);
                await userWorker.deleteUser(request.body.deleteById);
                response.redirect('/admin#admin-users');
                break;
            case "admin-products":
                await productWorker.deleteProduct(request.body.deleteById);
                response.redirect('/admin#admin-products');
                break;
            case "admin-services":
                await serviceWorker.deleteService(request.body.deleteById);
                response.redirect('/admin#admin-services');
                break;

        }
    }else if(request.body.updateById !== undefined){
        switch (request.body.moderateContext){
            case "admin-employers":
                let currentEmployer = await employeeWorker.getEmployer(request.body.updateById);
                request.session.updatedEmployer = currentEmployer;
                response.redirect('/admin#admin-employers');
                break;
            case "admin-positions":
                let currentPosition = await positionWorker.getPosition(request.body.updateById);
                request.session.updatedPosition = currentPosition;
                response.redirect('/admin#admin-positions');
                break;
            case "admin-users":
                let currentUser = await userWorker.getUser(request.body.updateById);
                request.session.updatedUser = currentUser;
                response.redirect('/admin#admin-users');
                break;
            case "admin-products":
                let currentProduct = await productWorker.getProduct(request.body.updateById);
                request.session.updatedProduct = currentProduct;
                response.redirect('/admin#admin-products');
                break;
            case "admin-services":
                let currentService = await serviceWorker.getService(request.body.updateById);
                request.session.updatedService = currentService;
                response.redirect('/admin#admin-services');
                break;
            case "admin-works":
                let currentWork = await workWorker.getWork(request.body.updateById);
                request.session.updatedWork = currentWork;
                response.redirect('/admin#admin-works');
                break;
        }
    }

}

module.exports.addDemo = async function(request,response){
    if(!request.session.isAdminAuth){
        response.redirect('/admin');
        return;
    }

    let model;
    let scene;
    let defaultColor;
    let path = request.body.productDemoPath;
    let productId = request.body.productDemoId;
    console.log(request.files);
    request.files.forEach(item=>{
        if(item.originalname.includes('.gltf')){
            model = item.originalname;
            let newPath = `public\\3d\\${path}\\${model}`;
            fs.mkdirSync(`public\\3d\\${path}`);
            fs.rename(item.path, newPath, function(err){
                if(err){
                    console.error(err)
                }
            });
        }
        if(item.originalname.includes('.bin')){
            scene = item.originalname;
            let newPath = `public\\3d\\${path}\\${scene}`;
            fs.rename(item.path, newPath, function(err){
                if(err){
                    console.error(err)
                }
            })
        }
        if(item.originalname.includes('.png')){
            defaultColor = item.originalname;
            fs.mkdirSync(`public\\3d\\${path}\\textures`);
            let newPath = `public\\3d\\${path}\\textures\\${defaultColor}`;
            fs.rename(item.path,newPath,function(err){
                if(err){
                    console.error(err);
                }
            })
        }
    })

    await productWorker.addDemo(productId,model,scene,defaultColor,path);
    response.redirect('/admin#admin-products');
}

module.exports.updateWork = async function(request,response){
    if(request.session.updatedWork.id){
        await workWorker.updateWork(request.body.workAuthor,request.body.workStatus,request.session.updatedWork.id);
        delete request.session.updatedWork;
    }
    response.redirect('/admin#admin-works');
}

module.exports.deleteReview = async function(request, response){
    let reviewId = request.body.deletedReviewId;

    if(reviewId){
        await commentWorker.deleteComment(reviewId);
    }

    response.redirect('/admin#admin-users')
}

module.exports.banUser = async function(request, response){
    let userId = request.body.btnBanUser;
    let banReason = request.body.banReason;
    let bannedIp = request.ip;

    if(banReason === undefined){
        banReason = null;
    }

    if(userId){

        await userWorker.banUser(userId,banReason,bannedIp);
    }

    response.redirect('/admin#admin-users');
}

module.exports.unbanUser = async function(request, response){
    let userId = request.body.btnUnbanUser;

    if(userId){
        await userWorker.unbanUser(userId);
    }

    response.redirect('/admin#admin-users');
}