const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'email field is required']
    },
    message: {
        type: String,
        required: [true, 'password field is required']
    }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;

