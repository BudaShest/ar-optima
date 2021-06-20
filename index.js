/*Стартовая точка приложения*/
/*Импорт модулей*/
const express = require('express'); //Подключаем модуль express
const bodyParser = require('body-parser'); //Модуль
const path = require('path');
const hbs = require('hbs');

/*Важные объекты*/
const app = express();



/*Настрйока app*/
//1)Настройка отображения
app.set('view engine','hbs');
//2)Добовляем в middleware body-parser для работы с телом запроса(нужен для POST)
app.use(bodyParser.urlencoded({extended:false}));
//3)Определеяем каталог, где хранятся статические рессурсы
app.use(express.static(path.join(__dirname,'public')))
//4)Настроим путь до частичных прдеставлений(темплейтов)
hbs.registerPartials(__dirname + "/views/partials");

/*Другие важные константы*/
const PORT = process.env.PORT || 3000; //Контсанта, содержащая порт


/*Роутинг с помощью Express*/
//1)Объекты роутеры
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');
const teammateRouter = require('./routes/teammateRouter');
const teammatesRouter = require('./routes/teammatesRouter');
const productsRouter = require('./routes/productsRouter');
const productRouter = require('./routes/productRouter');
const serviceRouter = require('./routes/serviceRouter');
//2)Привязка объектов к соответсвующим url
app.use('/', homeRouter);
app.use('/admin',adminRouter);
app.use('/teammate', teammateRouter);
app.use('/teammates',teammatesRouter);
app.use('/products', productsRouter);
app.use('/product',productRouter);
app.use('/service', serviceRouter);
//Обработка несуществущей страницы
app.use(function (req,res,hext){
   res.status(404).send('<h1>Not Found</h1>');
});

//Запуск сервера
app.listen(PORT,()=>{
   console.log('Server has been started');
});

