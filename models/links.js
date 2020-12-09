const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    link: {
        type: String,
        required: true,
        unique: true,
    },
    person: {
        type: String,
        required: true,
    }
}, { timestamp: true });

const Links = mongoose.model('links', linkSchema);
module.exports = Links;