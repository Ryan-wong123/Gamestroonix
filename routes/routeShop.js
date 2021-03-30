"use strict"

const shopController = require('../controllers/shopController');

function routeShop(app){
    app.route('/shop')
        .get(shopController.getAllShop);
}

module.exports = {routeShop};