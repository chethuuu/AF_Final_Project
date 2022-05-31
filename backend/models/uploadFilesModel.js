const mongoose = require("mongoose")

// var fileUploads = new mongoose.Schema({
//     file: {type: String, required:true, default:'default file path'},
//     groupNo: {type: String, required:true, default:'default Group No'},
// })

// module.exports = mongoose.model('StuFileUploads', fileUploads);

var imageSchema = new mongoose.Schema({
    name: {type: String, required:true, default:'default Name'},
    desc: {type: String, required:true, default:'default file path'},
    img: {type: Buffer},
    contentType: {type: String},
    groupNo: {type: String, required:true, default:'default Group No'},
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('StuFileUploads', imageSchema);