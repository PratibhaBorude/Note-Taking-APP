const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    toJSON: {  
        virtuals: false,  // Disable the virtual 'id' field
        versionKey: false, 
        transform: (doc, ret) => { 
            delete ret._id;  // Remove the _id field
        }
    }
});

module.exports = mongoose.model('Note', notesSchema);
