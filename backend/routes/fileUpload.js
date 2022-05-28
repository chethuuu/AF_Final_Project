const express = require('express');
const uploadF = express.Router();
const multer = require('multer');
const uploadFilesModel = require('../models/uploadFilesModel');

// const upload = multer({dest:'./uploads/'}).single("demo_image");

//========== UPLOAD FILE ====================================================
const upload = multer({dest:'./uploads/'}).single("demo_image");

uploadF.post("/image", (req, res) => {
    upload(req, res, async (err) => {
        if(err) {
            res.status(400).send("Something went wrong!");
        }else{
            let file = {
                "file" : req.files.demo_image.tempFilePath,
                "groupNo": req.header('x-auth-token'),
            };
            console.log("GROUP Header : " + req.header('x-auth-token'));
            try{
                let newfileModel = new uploadFilesModel(file);
                await newfileModel.save();
                res.status(200).json({msg: "Successfully Uploaded", result: req.files});
                console.log(req.files.demo_image.name);
            }catch (error) {
                res.status(404).send("File Not Uploaded");
            }
        }
    });
 });

  //===== DELETE ALL =============================================================
  uploadF.delete('/deleteAllDoc', async(req,res) => {
    try{
        await uploadFilesModel.deleteMany();
        res.status(200).json({msg: "Successfully deleted All"});
    } catch (error) {
        res.status(500).send("Cannot delete Payment Details");
    }
});

//===== DELETE A DOCUMENT =============================================================
uploadF.delete('/deleteDoc/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const doc = await uploadFilesModel.findByIdAndDelete(id);
        res.status(200).json({msg: "Document Deleted Successfully"});
    } catch (error) {
        res.status(500).send("Cannot delete the Document");
    }
})


//===== GET DOCUMENT =============================================================
uploadF.get('/getDoc/:id', async (req,res) => {
    const {id} = req.params;
    console.log(id);
    try{
        const doc = await uploadFilesModel.findById(id);
        res.status(200).json({msg: "Document recieved Successfully", Result: doc});
    } catch (error) {
        res.status(500).send("Cannot get the Document");
    }
})

module.exports = uploadF;