"use strict";

class Shop {
constructor(shop_id, shop_name, shop_address) {
    this.shop_id = shop_id;
    this.shop_name = shop_name;
    this.shop_address = shop_address;
    }   

    //add get methods here
    getShop_id(){
        return this.shop_id;
    }

    getShop_name(){
        return this.shop_name;
    }

    getShop_address(){
        return this.shop_address;
    }

}
module.exports = Shop;