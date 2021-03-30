"use strict"

//import file
const CommentDB = require('../models/CommentDB');
const Comment = require('../models/Comment');

var commentDB = new CommentDB();

//retrieve comment
function getAllComments(request, respond){
    commentDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

//add comment
function addComment(request, respond)
{
    var comment = new Comment(null, request.body.username, request.body.comment, request.body.username_id, request.body.game_id);

    commentDB.addComment(comment, function(error, result)
    {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });

    //send email to admin whenever a comment is sent
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wong.ryan5091@gmail.com',
            pass: 'grazous123456'
        }
    });

    var mailOptions = {
        from: 'wong.ryan5091@gmail.com',
        to: 'Ryanside21@gmail.com',
        subject: 'new comment',
        text: 'A new comment has been added'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

//update comment
function updateComment(request, respond)
{
    var comment = new Comment(request.params.comments_id, request.body.username, request.body.comment, request.body.username_id, request.body.game_id);

    commentDB.updateComment(comment, function(error, result)
    {
        if (error) {
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}

//delete comment
function deleteComment(request, respond){

    var commentID = request.params.comments_id;

    commentDB.deleteComment(commentID, function(error, result)
     {
         if (error) {
             respond.json(error);
         }else{
             respond.json(result);
         }
     });
 }
module.exports = {getAllComments, addComment, updateComment, deleteComment};