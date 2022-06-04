const mongoose = require("mongoose")

var imageSchema = new mongoose.Schema({
    name: {type: String, required:true, default:'default Name'},
    desc: {type: String, required:true, default:'default file path'},
    img: {type: Buffer},
    contentType: {type: String},
    groupNo: {type: String, required:true, default:'default Group No'},
});
 
//Image is a model which has a schema imageSchema
module.exports = new mongoose.model('StuFileUploads', imageSchema);