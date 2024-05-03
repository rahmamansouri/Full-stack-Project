const mongoose = require('mongoose');

const post = mongoose.model('post', {
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    imagePath: { 
        type: String,
         required: true 
        },
    
    postDate: {
            type: String,
            required: true
        }

});


module.exports = post