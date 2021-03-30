"use strict";

class Video {
constructor(videos_id, title, thumbnail, platform, genre, description, video_link) {
    this.videos_id = videos_id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.platform = platform;
    this.genre = genre;
    this.description = description;
    this.video_link = video_link;
    }   

    //add get methods here
    getVideos_id(){
        return this.videos_id;
    }

    getTitle(){
        return this.title;
    }

    getThumbnail(){
        return this.thumbnail;
    }

    getPlatform(){
        return this.platform;
    }

    getGenre(){
        return this.genre;
    }

    getDescription(){
        return this.description;
    }

    getVideo_link(){
        return this.video_link;
    }

}
module.exports = Video;