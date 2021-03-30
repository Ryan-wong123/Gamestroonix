"use strict";

class Profile {
constructor(profile_id, username, email, password, profilepic) {
    this.profile_id = profile_id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.profilepic = profilepic;
    }   

    //add get methods here
    getProfile_id(){
        return this.profile_id;
    }

    getUsername(){
        return this.username;
    }

    getEmail(){
        return this.email;
    }
    
    getPassword(){
        return this.password;
    }

    getProfilepic(){
        return this.profilepic;
    }

    //set method
    setUsername(username){
        this.username = username;
    }

    setEmail(email){
        this.email = email;
    }

    setPassword(password){
        this.password = password;
    }

    setProfilepic(profilepic){
        this.profilepic = profilepic;
    }

}

module.exports = Profile;
