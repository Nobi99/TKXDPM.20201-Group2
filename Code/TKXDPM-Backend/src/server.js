var express = require('express');
var bodyParser = require('body-parser');
import connection from './config/database.config';
import initRouter from './route/web';
import mysql from 'mysql';
import { createBikeTableSQL, createStationTableSQL, fakeBike, fakeStation } from './Schema';
import BikeModel from './model/bike.model';
import cors from 'cors';
require('dotenv').config();



var app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
initRouter(app);


app.listen(process.env.PORT, () => {
    console.log("Chiến is running app");
});
