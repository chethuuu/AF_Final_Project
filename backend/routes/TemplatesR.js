const express = require('express')

const { uploadImage, addDocs,} = require('../controller/templateUploadController')

const router = express.Router();


router.post('/addDoc3', uploadImage, addDocs);


module.exports = router;