
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