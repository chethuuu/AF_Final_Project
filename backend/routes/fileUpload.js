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


module.exports = uploadF;