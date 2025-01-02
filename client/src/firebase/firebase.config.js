// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCG7IbMAZgs_o1V0LyjspfNlTTh31TzI-w",
  authDomain: "soloventure-c962d.firebaseapp.com",
  projectId: "soloventure-c962d",
  storageBucket: "soloventure-c962d.firebasestorage.app",
  messagingSenderId: "830761274375",
  appId: "1:830761274375:web:2b1e63bf668398eb3a2ea2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;