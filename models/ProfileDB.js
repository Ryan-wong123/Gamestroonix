"use strict"

var db = require('../db-connection');

class ProfileDB{
    
    getAllProfile(callback){
        var sql = "select * from game_review.profile";

        db.query(sql, callback);
    }

    //calculate the total number of reviews left by user
    getReviewCounts(reviewCount, callback){
        var sql = " select COUNT(comments_id) AS 'ReviewCount' from game_review.comments WHERE username_id = ?";

        return db.query(sql, [reviewCount.getComments_id(), reviewCount.getUsername_id()], callback);
    }

    //update password
    updateProfile(profile,callback) {
        var sql = "UPDATE game_review.profile SET password = ? WHERE profile_id = ?";
        
        return db.query(sql, [profile.getPassword(), profile.getProfile_id()], callback);
    }

    //create account
    addAccount(account,callback) {
        var sql = "INSERT INTO game_review.profile (username, email, password) VALUES (?,?,?)";
        
        db.query(sql, [account.getUsername(), account.getEmail(), account.getPassword()], callback) ;
    }

    //login credential
    authenticateByDB(id, password, callback) {
        var sql = "SELECT * FROM game_review.profile WHERE username = ? AND password = ?";

        db.query(sql, [id, password], callback);
    }

    showComments(profileId, callback){
        var sql = "SELECT g.title, c.comment, p.username FROM game g, comments c, profile p WHERE g.game_id = c.game_id AND p.profile_id = c.username_id AND p.profile_id = ?";

        db.query(sql, [profileId], callback);
    }
}

module.exports = ProfileDB;
