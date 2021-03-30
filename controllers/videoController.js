"use strict"

//import file
const VideoDB = require('../models/VideoDB');

var videoDB = new VideoDB();

function getAllVideo(request, respond){
    videoDB.getAllVideo(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllVideo};
