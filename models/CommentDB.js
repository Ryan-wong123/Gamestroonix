"use strict"

var db = require('../db-connection');

class CommentDB{
    //retrieve all comments
    getAllComments(callback){
        var sql = "select * from game_review.comments";
        db.query(sql, callback);
    }

    //add comment
    addComment(comment,callback) {
        var sql = "INSERT INTO game_review.comments (username, comment, username_id, game_id) VALUES (?,?,?,?)";
        
        db.query(sql, [comment.getUsername(), comment.getComment(), comment.getUsername_id(), comment.getGame_id()], callback) ;
    }
    
    //update comment
    updateComment(comment,callback) {
        var sql = "UPDATE game_review.comments SET username = ?, comment = ? WHERE comments_id = ?";
        
       return db.query(sql, [comment.getUsername(), comment.getComment(), comment.getComments_id()], callback);
    }

    //delete comment
    deleteComment(commentid,callback) {
        var sql = "DELETE from game_review.comments WHERE comments_id = ?";
        
       return db.query(sql, commentid, callback);
    }
}

module.exports = CommentDB;
