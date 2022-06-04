const mongoose = require("mongoose")

var MessageSchema = new mongoose.Schema({
    conversationId:{type: String,},
    sender: {type: String,},
    text: {type: String,}
},{timestamps: true});
 
//Message is a model which has a schema imageSchema
module.exports = new mongoose.model('Message', MessageSchema);