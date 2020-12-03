import mysql from 'mysql';
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'ecobike'
});



export default connection;