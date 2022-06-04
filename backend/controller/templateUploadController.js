const multer = require('multer')
const uploadFilesModel = require('../models/TemplatesM');

const fs = require("fs");

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        // callback(null, `image-${Date.now()}.${ext}`);
        callback(null, `${file.originalname}`);
    }
})


const upload = multer({
    storage: multerConfig,
    //fileFilter: isImage,
});

exports.uploadImage = upload.single('document');

//==========Add Files =======================================================================
exports.upload = async (req,res) => {
    try{
        console.log(req.file);
        let file = {
            "file" : req.file.path,
            "Subjectname": req.header('x-auth-token'),
        };
        console.log("HEADER : " + req.header('x-auth-token'));
        let newfileModel = new uploadFilesModel(file);
        await newfileModel.save();
        res.status(200).json({msg: "File Uploaded Successfully", result: req.file})
    }catch (err){
        res.status(500).json({msg: "File Not Uploaded"})
    }
}

//===========Add 2 =========================================================
exports.addDocs = async (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        //image:new Buffer.from(encode_img,'base64'),
        // "name": req.file.originalname,
        "name": req.file.originalname,
        "desc": req.file.path,
        "img": new Buffer.from(encode_img,'base64'),

    };
    let newfileModel = new uploadFilesModel(final_img);
    await newfileModel.save();
    res.status(200).json({msg: "File Uploaded Successfully", result: final_img});

}

//========== Delete All Files =======================================================================
exports.deleteAllDoc = async (req,res) => {
    try{
        await uploadFilesModel.deleteMany();
        res.status(200).json({msg: "Successfully deleted All"});
    }catch(err){
        res.status(500).json({err: err});
    }
}


//========== Get All Files =======================================================================
exports.getAllDocuments = async(req, res) => {
    try{
        const data = await uploadFilesModel.find();
        res.json({Message : "All results fetched", Result: data})
    } catch (errror) {
        res.status(500).send("Cannot fetch all data");
    }
}

//========== DOWNLOAD SUBMITTED DOCUMENT ========================================
exports.downloadFile = async (req, res) => {
    const {docName} = req.params;
    res.download(`public/${docName}`);
}