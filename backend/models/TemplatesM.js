const mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    name: {type: String, required:true, default:'default Name'},
    desc: {type: String, required:true, default:'default file path'},
    img: {type: Buffer},
    contentType: {type: String},
    
});
  
module.exports = new mongoose.model('AdminTemplate', imageSchema);