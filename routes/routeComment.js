"use strict"

const commentController = require('../controllers/commentController');

function routeComment(app){
    app.route('/comment')
        .get(commentController.getAllComments)
        .post(commentController.addComment);

    app.route('/comment/:comments_id')
        .put(commentController.updateComment)
        .delete(commentController.deleteComment);
}

module.exports = {routeComment};