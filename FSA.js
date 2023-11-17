// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB57y03E20hHHi_xJY47o7r9ITp2Qrp1Ec",
  authDomain: "palmycafe-c9e52.firebaseapp.com",
  projectId: "palmycafe-c9e52",
  storageBucket: "palmycafe-c9e52.appspot.com",
  messagingSenderId: "627007815672",
  appId: "1:627007815672:web:8b15d027ffc6e80bda200d",
  measurementId: "G-ZQZZ4PMQM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);