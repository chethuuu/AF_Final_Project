const multer = require('multer')
const uploadFilesModel = require('../models/uploadFilesModel');

const fs = require("fs");

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `${file.originalname}`);
    }
})

const upload = multer({
    storage: multerConfig,
});

exports.uploadImage = upload.single('document');

//==========Add Files =======================================================================
exports.upload = async (req,res) => {
    try{
        console.log(req.file);
        let file = {
            "file" : req.file.path,
            "groupNo": req.header('x-auth-token'),
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
        "name": req.file.originalname,
        "desc": req.file.path,
        "img": new Buffer.from(encode_img,'base64'),
        "groupNo": req.header('x-auth-token'),
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

//========== Delete a File =======================================================================
exports.deleteDoc = async (req,res) => {
    const {id} = req.params;
    try{
        const doc = await uploadFilesModel.deleteOne({groupNo: id});
        res.status(200).json({msg: "Document Deleted Successfully"});
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

//========== Get A File =======================================================================
exports.getDocument = async (req,res) => {
    const {id} = req.params;
    console.log(id);
    try{
        const doc = await uploadFilesModel.findById(id);
        res.status(200).json({msg: "Document recieved Successfully", Result: doc});
    } catch (error) {
        res.status(500).send("Cannot get the Document");
    }
}

//========== Update A File =======================================================================
exports.updateDocument = async (req, res) => {
    const{id} = req.params;
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var data = {
        contentType:req.file.mimetype,
        "name": req.file.originalname,
        "desc": req.file.path,
        "img": new Buffer.from(encode_img,'base64'),
        "groupNo": req.header('x-auth-token'),
    };
    try{
        await uploadFilesModel.findByIdAndUpdate(id, data);
        res.json({Message: "Document Updated Successfully..."});
    } catch (error) {
        res.status(500).send("Document Not Updated");
    }
}

//========== DOWNLOAD SUBMITTED DOCUMENT ========================================
exports.downloadFile = async (req, res) => {
    const {docName} = req.params;
    res.download(`public/${docName}`);
}