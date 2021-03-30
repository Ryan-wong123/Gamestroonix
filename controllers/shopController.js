"use strict"

//import file
const ShopDB = require('../models/ShopDB');

var shopDB = new ShopDB();

function getAllShop(request, respond){
    shopDB.getAllShop(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllShop};