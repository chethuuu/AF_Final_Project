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

const isImage = (req, file, callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else {
        callback(new Error('Only Images is Allowed'));
    }
}

const upload = multer({
    storage: multerConfig,
    //fileFilter: isImage,
});

exports.uploadImage = upload.single('demo_image');

exports.upload = async (req,res) => {
    try{
        console.log(req.file);
        let file = {
            "file" : req.file.path,
            "groupNo": req.header('x-auth-token'),
        };
        let newfileModel = new uploadFilesModel(file);
        await newfileModel.save();
        res.status(200).json({msg: "File Uploaded Successfully", result: req.file})
    }catch (err){
        res.status(500).json({msg: "File Not Uploaded"})
    }
}