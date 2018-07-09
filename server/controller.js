const express = require('express');
const router = express.Router();
const Comment = require('./models/comment');

const methods = {
    getAllComments: function(req, res) {
        Comment.find({}, function(err, comments) {
            if (err) throw err;

            return res.json({
                success: true,
                comments: comments
            });
        });
    },
    findComments: function(req, res) {
        debugger;
        Comment.find({email: req.params.email}, function(err, comments) {
            if (err) {
                res.status(500).send(err);
            }

            return res.json({
                success: true,
                comments: comments
            });
        });
    },
    addComment: function(req, res) {
        var newComment = new Comment({
            email: req.params.email,
            message: req.params.message
         });
        newComment.save(function(err) {
            if (err) throw err;
            console.log('comment saved successfully!');

            return res.json({
                success: true
            });
        });
    }
};

router.get('/findComments/:email', methods.findComments);
router.get('/getAllComments',  methods.getAllComments);
router.get('/addComment/:email/:message',  methods.addComment);


module.exports = Object.assign(router, { methods });

