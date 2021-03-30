"use strict"

//import file
const GameDB = require('../models/GameDB');

var gameDB = new GameDB();

//retrieve all games
function getAllGames(request, respond){
    gameDB.getAllGames(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//search for games
function searchGameTitle(request, respond){

    var title = request.params.title;
    
    gameDB.searchGameTitle(title, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllGames, searchGameTitle};