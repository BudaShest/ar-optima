const mysql = require('mysql2');
const config = require('../db/config');

module.exports = mysql.createPool(config).promise();
// module.exports =await mysql.createConnection(config);