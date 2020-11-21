const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name must be included!"],
        minlength: [3, "Author must be first & last name."]
    }
}, {timestamps: true});
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author; 