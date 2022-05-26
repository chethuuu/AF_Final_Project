const mongoose = require('mongoose');

//Create TodoSchema
const TodoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Todo',TodoSchema);