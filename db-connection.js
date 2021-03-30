"use strict"

//create connection to DB
var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost' ,
  port: '3304',
  user:'root',
  password:'',
  database:'game_review'
});

module.exports = connection;