"use strict";

class Game {
constructor(game_id, title, thumbnail, detail, catergory, platform, date_released, rating, description, trailer_link, genre) {
    this.game_id = game_id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.detail = detail;
    this.catergory = catergory;
    this.platform = platform;
    this.date_released = date_released;
    this.rating = rating;
    this.description = description;
    this.trailer_link = trailer_link;
    this.genre = genre;
    }   

    //add the get methods here
    getGame_id(){
        return this.game_id;
    }

    getTitle(){
        return this.title;
    }

    getThumbnail(){
        return this.thumbnail;
    }

    getDetail(){
        return this.detail;
    }

    getCatergory(){
        return this.catergory;
    }

    getPlatform(){
        return this.platform;
    }

    getDate_released(){
        return this.date_released;
    }

    getRating(){
        return this.rating;
    }

    getDescription(){
        return this.description;
    }

    getTrailer_link(){
        return this.trailer_link;
    }

    getGenre(){
        return this.genre;
    }

}
module.exports = Game;