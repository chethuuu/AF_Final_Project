const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs')

//upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

router.post('/upload', (req, res) => {
    try {
        console.log(req.files);
        //res.json('upload')
        if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).send({msg: 'No files were uploaded.'})
        
        const file = req.files.file;
        
        if(file.mimetype !== 'document/pdf' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File format is incorrect."})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "Online_Protect_Tool"}, async(err, result) => {
            if(err) throw err;
            removeTmp(file.tempFilePath);
            res.json({result});
        });
            
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

// Delete image
// router.post('/destroy', (req, res) => {
//     try {
//         const {public_id} = req.body;
//         if(!public_id) return res.status(400).json({msg: 'No images Selected'})

//         cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
//             if(err) throw err;

//             res.json({msg: "Deleted Image"})
//         })

//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
    
// });

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err;
    })
}

module.exports = router;