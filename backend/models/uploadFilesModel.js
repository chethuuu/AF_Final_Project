const mongoose = require("mongoose")

var fileUploads = new mongoose.Schema({
    file: {type: String, required:true, default:'default file path'},
    groupNo: {type: String, required:true, default:'default Group No'},
})

module.exports = mongoose.model('StuFileUploads', fileUploads);