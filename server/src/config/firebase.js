// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKeQsPzH-cRP4UFzT8KoUZLihf4MbL1ns",
  authDomain: "photogalaxy-cd724.firebaseapp.com",
  projectId: "photogalaxy-cd724",
  storageBucket: "photogalaxy-cd724.appspot.com",
  messagingSenderId: "948047693034",
  appId: "1:948047693034:web:8b32d46890911a066dc393",
  measurementId: "G-LRW2V98QGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);