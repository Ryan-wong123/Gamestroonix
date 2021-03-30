"use strict"

var db = require('../db-connection');

class GameDB{
    //retrieve game
    getAllGames(callback){
        var sql = "select * from game_review.game ORDER BY title";
        db.query(sql, callback);
    }

    //search for game
    searchGameTitle(title, callback){
        var sql = "SELECT * FROM game_review.game WHERE title LIKE '%" + title + "%'";
        db.query(sql, callback);
    }
}

module.exports = GameDB;
