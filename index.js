/*Стартовая точка приложения*/

const mysql = require('mysql2/promise');
const express = require('express'); //Подключаем модуль express
const PORT = process.env.PORT || 3000; //Контсанта, содержащая порт

const config = require('./config/config');
const app = express(); //Создаём объект сервера

async function start(){
    const conn = await mysql.createConnection(config);
    const [rows,fields] = await conn.execute('SELECT * FROM user');
    console.log(rows);
}

app.listen(PORT,()=>{
   console.log('Server has been started');
});

start();