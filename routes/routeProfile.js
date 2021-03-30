"use strict"

const profileController = require('../controllers/profileController');

function routeProfile(app){
    //get all accounts and also add accounts
    app.route('/profile')
        .get(profileController.getAllProfile)
        .post(profileController.addAccount);

    app.route('/profile/:username_id')
        .get(profileController.getReviewCounts);

    app.route('/profile/:profile_id')
        .put(profileController.updateProfile);

    app.route('/login')
        .post(profileController.authenticateByDB);

    app.route('/profile/showComments/:individualComment')
        .get(profileController.showComments);
}

module.exports = {routeProfile};