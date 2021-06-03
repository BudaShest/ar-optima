/*Стартовая точка приложения*/
/*Импорт модулей*/
const express = require('express'); //Подключаем модуль express
const bodyParser = require('body-parser'); //Модуль
const path = require('path');
/*Важные объекты*/
const app = express();

/*Настрйока app*/
//1)Настройка отображения
app.set('view engine','hbs');
//2)Добовляем в middleware body-parser для работы с телом запроса(нужен для POST)
app.use(bodyParser.urlencoded({extended:false}));
//3)Определеяем каталог, где хранятся статические рессурсы
app.use(express.static(path.join(__dirname,'public')))

/*Другие важные константы*/
const PORT = process.env.PORT || 3000; //Контсанта, содержащая порт


/*Роутинг с помощью Express*/
//1)Объекты роутеры
const homeRouter = require('./routes/homeRouter');
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

