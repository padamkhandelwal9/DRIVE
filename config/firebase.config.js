const Firebase=require('firebase-admin');

const serviceAccount=require('../drive-d8557-firebase-adminsdk-fbsvc-f4414327c4.json');

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:"drive-d8557.firebasestorage.app"
  
})


module.exports=Firebase;