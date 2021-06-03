const mysql = require('mysql2');
const config = require('../db/config');

module.exports = mysql.createConnection(config).promise();