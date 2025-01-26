const { credential } = require('firebase-admin');
const multer=require('multer');
const firebase=require('./firebase.config');
const firebaseStorage=require('multer-firebase-storage');
const serviceAccount=require('../drive-d8557-firebase-adminsdk-fbsvc-f4414327c4.json');


const storage=firebaseStorage({

    credentials:firebase.credential.cert(serviceAccount),
    bucketName:"drive-d8557.firebasestorage.app",
    unique:true
})

const upload=multer({
    storage:storage,
})

module.exports=upload;