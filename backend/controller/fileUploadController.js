const multer = require('multer')
const uploadFilesModel = require('../models/uploadFilesModel');

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    }
})

// const isImage = (req, file, callback) => {
//     if(file.mimetype.startsWith('image')){
//         callback(null, true)
//     }else {
//         callback(new Error('Only Images is Allowed'));
//     }
// }

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
        const doc = await uploadFilesModel.findByIdAndDelete(id);
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
    let data = {
        "file" : req.file,
        "groupNo" : req.header('groupNo'),
    };
    try{
        await uploadFilesModel.findByIdAndUpdate(id, data);
        res.json({Message: "Document Updated Successfully..."});
    } catch (error) {
        res.status(500).send("Document Not Updated");
    }
}
