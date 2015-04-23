/**
 * Created by nina on 4/22/15.
 */
var mongoose = require('mongoose');

var ContactModel = mongoose.model('contact', {
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }

});//this is will show as DB on contacts

module.exports = ContactModel;