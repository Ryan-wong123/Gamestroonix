"use strict";

class Comment {
constructor(comments_id, username, comment, username_id, game_id) {
    this.comments_id = comments_id;
    this.username = username;
    this.comment = comment;
    this.username_id = username_id;
    this.game_id = game_id;
    }   

    //add get methods here
    getComments_id(){
        return this.comments_id;
    }

    getUsername(){
        return this.username;
    }

    getComment(){
        return this.comment;
    }

    getUsername_id(){
        return this.username_id;
    }

    getGame_id(){
        return this.game_id;
    }

    // add set methods
    setUsername(username){
        this.username = username;
    }

    setComment(comment){
        this.comment = comment;
    }

    setUsername_id(username_id){
        this.username_id = username_id;
    }
    
    setGame_id(game_id){
        this.game_id = game_id;
    }

}
module.exports = Comment;