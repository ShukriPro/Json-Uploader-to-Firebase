const admin = require('firebase-admin');
const serviceAccount = require('./palmycafe-c9e52-firebase-adminsdk-kmw2z-2202ce4b36.json'); // Replace with your service account file

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

const data = require('./sv2.json'); // Replace with your JSON file

const uploadData = async () => {
  const collectionRef = firestore.collection('Places'); // Replace with your collection name
  const promises = [];

  data.forEach((item) => {
    promises.push(collectionRef.add(item));
  });

  await Promise.all(promises);
  console.log('Data uploaded successfully');
};

uploadData().catch(console.error);
const verifyUpload = async () => {
    const snapshot = await collectionRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  };
  
  uploadData()
    .then(verifyUpload)  // Add this line to call verifyUpload after uploadData resolves
    .catch(console.error);