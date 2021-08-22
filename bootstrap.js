//Этот файл нужен для инциализации необходимых объектов
const connection = require('./db/connect');

//1)Классы и объекты
const Employee = require('./app/models/employee');
const OnWork = require('./app/models/onWork');
const Position = require('./app/models/position');
const Product = require('./app/models/product');
const Service = require('./app/models/service');
const User = require('./app/models/user');
const Comment = require('./app/models/comment');

const employeeWorker = new Employee(connection);
const workWorker = new OnWork(connection);
const positionWorker = new Position(connection);
const productWorker = new Product(connection);
const serviceWorker = new Service(connection);
const userWorker = new User(connection);
const commentWorker = new Comment(connection);

module.exports.employeeWorker = employeeWorker;
module.exports.workWorker = workWorker;
module.exports.positionWorker = positionWorker;
module.exports.productWorker = productWorker;
module.exports.serviceWorker = serviceWorker;
module.exports.userWorker = userWorker;
module.exports.commentWorker = commentWorker;

//2)Загрузка файлов(картинки)
const express = require('express');

const app = express();
const multer = require('multer');
app.use(express.static(__dirname));

const storage = multer.diskStorage({
    destination: 'public/img/uploads',
    filename: function (req, file,callback){
        callback(null,Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage:storage});

module.exports.upload = upload;

//3)Загрузка файлов(3d-демо)
const demoStorage = multer.diskStorage({
    destination:'public/3d',
    filename:function (req,file,callback){
        callback(null,file.originalname);
    }
})
const upload2 = multer({storage:demoStorage});

module.exports.upload2 = upload2;