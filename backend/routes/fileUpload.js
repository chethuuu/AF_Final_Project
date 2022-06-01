// const express = require('express');
// const uploadF = express.Router();
// const multer = require('multer');
// const path = require('path');
// const uploadFilesModel = require('../models/uploadFilesModel');

// // const upload = multer({dest:'./uploads/'}).single("demo_image");

// //========== UPLOAD FILE ====================================================
// //const upload = multer({dest:'./uploads/'}).single("demo_image");
// // const storage = multer.diskStorage({
// //     destination: function(req,res,cb){
// //         console.log("Something...");
// //         cb(null, 'uploads');
// //     },
// //     //destination: "./backend/uploads/",
// //     // filename: function(req,files,cb){
// //     //     console.log("FILENAME LOG : "+ files);
// //     //     cb(null,'congar'+'-'+Date.now()+path.extname(files.originalname))
// //     // }
// // })

// // var storage = multer.diskStorage({
// //     destination: function(req, file, callback) {
// //       callback(null, 'uploads/')
// //     },
// //     filename: function(req, file, callback) {
// //       console.log(req.file)
// //       callback(null, req.file + '-' + Date.now() + path.extname(req.files))
// //     }
// //   })
 
//   const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, 'public/');
//     },
//     filename: (req, file, callback) => {
//         const ext = file.mimetype.split('/')[1];
//         callback(null, `image-${Date.now()}.${ext}`);
//     }
// })  

// const upload = multer({
//     storage: storage,
// }).single("demo_image");

// uploadF.post("/image", (req, res) => {
//     upload(req, res, async (err) => {
//         if(err) {
//             res.status(400).send("Something went wrong!");
//         }else{
//             console.log("INSIDE ELSE");
//             let file = {
//                 "file" : req.files.demo_image.tempFilePath,
//                 "groupNo": req.header('x-auth-token'),
//             };
//             console.log("GROUP Header : " + req.header('x-auth-token'));
//             try{
//                 let newfileModel = new uploadFilesModel(file);
//                 await newfileModel.save();
//                 res.status(200).json({msg: "Successfully Uploaded", result: req.files});
//                 console.log(req.files.demo_image.name);
//             }catch (error) {
//                 res.status(404).send("File Not Uploaded");
//             }
//         }
//     });
//  });

//   //===== DELETE ALL =============================================================
//   uploadF.delete('/deleteAllDoc', async(req,res) => {
//     try{
//         await uploadFilesModel.deleteMany();
//         res.status(200).json({msg: "Successfully deleted All"});
//     } catch (error) {
//         res.status(500).send("Cannot delete Payment Details");
//     }
// });

// //===== DELETE A DOCUMENT =============================================================
// uploadF.delete('/deleteDoc/:id', async(req,res) => {
//     const {id} = req.params;
//     try{
//         const doc = await uploadFilesModel.findByIdAndDelete(id);
//         res.status(200).json({msg: "Document Deleted Successfully"});
//     } catch (error) {
//         res.status(500).send("Cannot delete the Document");
//     }
// })


// //===== GET DOCUMENT =============================================================
// uploadF.get('/getDoc/:id', async (req,res) => {
//     const {id} = req.params;
//     console.log(id);
//     try{
//         const doc = await uploadFilesModel.findById(id);
//         res.status(200).json({msg: "Document recieved Successfully", Result: doc});
//     } catch (error) {
//         res.status(500).send("Cannot get the Document");
//     }
// })

//  //===== GET ALL DOCUMENTS =============================================================
//  uploadF.get('/getAllDocs', async (req,res) => {
//     try{
//         const data = await uploadFilesModel.find();
//         res.json({Message : "All results fetched", Result: data})
//     } catch (errror) {
//         res.status(500).send("Cannot fetch all data");
//     }
// })

// //===== UPDATE DOCUMENT =============================================================
// uploadF.put('/updateDoc/:id', async (req, res) => {
//     const{id} = req.params;
//     let data = {
//         "file" : req.files.demo_image.tempFilePath,
//         "groupNo" : req.header('x-auth-token'),
//     };
//     try{
//         await uploadFilesModel.findByIdAndUpdate(id, data);
//         res.json({Message: "Document Updated Successfully..."});
//     } catch (error) {
//         res.status(500).send("Document Not Updated");
//     }
// })

// module.exports = uploadF;

const express = require('express')

const {upload, uploadImage, deleteAllDoc, deleteDoc, getAllDocuments, getDocument, updateDocument, addDocs, downloadFile} = require('../controller/fileUploadController')

const router = express.Router();

router.post('/addDoc', uploadImage, upload);
router.delete('/deleteAllDoc',deleteAllDoc);
router.delete('/deleteDoc/:id',deleteDoc);
router.get('/getAllDocs',getAllDocuments);
router.get('/getDoc/:id', getDocument);
router.put('/updateDoc/:id', uploadImage, updateDocument);

router.post('/addDoc2', uploadImage, addDocs);
router.get("/downloadDoc/:docName", downloadFile);

module.exports = router;