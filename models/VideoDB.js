"use strict"

var db = require('../db-connection');

class VideoDB{
    getAllVideo(callback){
        var sql = "select * from game_review.videos ORDER BY title";
        db.query(sql, callback);
    }
}

module.exports = VideoDB;