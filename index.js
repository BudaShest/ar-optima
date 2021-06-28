/*Стартовая точка приложения*/
/*Импорт модулей*/
const express = require('express'); //Подключаем модуль express
const bodyParser = require('body-parser'); //Модуль
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
/*Важные объекты*/
const app = express();

/*Другие важные константы*/
const PORT = process.env.PORT || 3000; //Контсанта, содержащая порт

/*Настрйока app*/
//1)Настройка отображения
app.set('view engine','hbs');
//2)Добовляем в middleware body-parser для работы с телом запроса(нужен для POST)
app.use(bodyParser.urlencoded({extended:false}));
//3)Определеяем каталог, где хранятся статические рессурсы
app.use(express.static(path.join(__dirname,'public')))
//4)Настроим путь до частичных прдеставлений(темплейтов)
hbs.registerPartials(__dirname + "/views/partials");
//5)Добавим хэлперов
//5.1)Хэлпер для вывода html
hbs.registerHelper('inputHTML', function (htmlString){
   return new hbs.SafeString(htmlString);
});
//6)TODO тест: сессия
app.use(
    session({
       secret:'secret',
       saveUninitialized:true
    })
)


/*Роутинг с помощью Express*/
//1)Объекты роутеры
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');
const teammateRouter = require('./routes/teammateRouter');
const teammatesRouter = require('./routes/teammatesRouter');
const productsRouter = require('./routes/productsRouter');
const productRouter = require('./routes/productRouter');
const serviceRouter = require('./routes/serviceRouter');
const authRouter = require('./routes/authRouter');
const personalRouter = require('./routes/personalRouter');
const adminAuthRouter = require('./routes/adminAuthRouter');
//2)Привязка объектов к соответсвующим url
app.use('/', homeRouter);
app.use('/admin',adminRouter);
app.use('/teammate', teammateRouter);
app.use('/teammates',teammatesRouter);
app.use('/products', productsRouter);
app.use('/product',productRouter);
app.use('/service', serviceRouter);
app.use('/auth', authRouter);
app.use('/personal', personalRouter);
app.use('/admin-auth',adminAuthRouter);
//Обработка несуществущей страницы
app.use(function (req,res,hext){
   res.status(404).send('<h1>Not Found</h1>');
});

//Запуск сервера
app.listen(PORT,()=>{
   console.log('Server has been started');
});

