"use strict"

var db = require('../db-connection');

class ShopDB{
    getAllShop(callback){
        var sql = "select * from game_review.shops";
        db.query(sql, callback);
    }
}

module.exports = ShopDB;