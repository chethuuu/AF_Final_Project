const mongoose = require("mongoose")

var ConversationSchema = new mongoose.Schema({
    members:{
        type: Array,
    }
},{timestamps: true});
 
//StuFileUploads is a model which has a schema imageSchema
module.exports = new mongoose.model('Conversation', ConversationSchema);