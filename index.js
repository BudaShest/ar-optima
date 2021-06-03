/*Стартовая точка приложения*/
/*Импорт модулей*/
const express = require('express'); //Подключаем модуль express
const bodyParser = require('body-parser'); //Модуль
/*Важные объекты*/
const app = express();

/*Настрйока app*/
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:false}));

/*Другие важные константы*/
const PORT = process.env.PORT || 3000; //Контсанта, содержащая порт


/*Роутинг с помощью Express*/
//1)Объекты роутеры
const homeRouter = require('./app/routes/homeRouter');
//2)Привязка объектов к соответсвующим url
app.use('/', homeRouter);


//Обработка несуществущей страницы
app.use(function (req,res,hext){
   res.status(404).send('<h1>Not Found</h1>');
});

//Запуск сервера
app.listen(PORT,()=>{
   console.log('Server has been started');
});

