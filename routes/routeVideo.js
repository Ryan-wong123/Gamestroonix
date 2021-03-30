"use strict"

const videoController = require('../controllers/videoController');

function routeVideo(app){
    app.route('/video')
        .get(videoController.getAllVideo);
}

module.exports = {routeVideo};