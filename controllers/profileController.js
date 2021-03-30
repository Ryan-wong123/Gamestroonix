"use strict"

//import file
const ProfileDB = require('../models/ProfileDB');
const Profile = require('../models/Profile');

const Comment = require('../models/Comment');

var profileDB = new ProfileDB();

//retrieve all users
function getAllProfile(request, respond){
    profileDB.getAllProfile(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//retrieve the number of reviews that a user has submitted
function getReviewCounts(request, respond){

    var reviewCount = new Comment(request.params.username_id);

    profileDB.getReviewCounts(reviewCount, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//update comment
function updateProfile(request, respond)
{
    var password = new Profile(request.params.profile_id, request.body.username, request.body.email, request.body.password, request.body.profilepic);

    profileDB.updateProfile(password, function(error, result)
    {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}

//add account
function addAccount(request, respond)
{
    var input_username = request.body.username;
    var input_email = request.body.email;
    var input_password = request.body.password;

    var account = new Profile(null, request.body.username, request.body.email, request.body.password);

    profileDB.addAccount(account, function(error, result) {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}

// This function authenticates by using the database to look for the requested username and password.
function authenticateByDB(request, respond) {
    var input_username = request.body.username;
    var input_password = request.body.password;
    var msg = "";

    profileDB.authenticateByDB(request.body.username, request.body.password, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item else it will have no item.
            if (result.length > 0) {
                msg = "1";
            } else {
                msg = "Login Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function creates a custom message to be sent back to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
}

//this function retrieves comments left by each corresponding user
function showComments(request, respond){

    var profileId = request.params.individualComment;

    profileDB.showComments(profileId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllProfile, getReviewCounts, updateProfile, addAccount, authenticateByDB, showComments};