const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mentorSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    
    address : {
        type: String,
        required: true
    },

    phone : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Mentor', mentorSchema);