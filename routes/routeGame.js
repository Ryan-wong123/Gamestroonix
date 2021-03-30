"use strict"

const gameController = require('../controllers/gameController');

function routeGame(app){
    app.route('/game')
        .get(gameController.getAllGames);
    app.route('/game/:title')
        .get(gameController.searchGameTitle);
}

module.exports = {routeGame};
