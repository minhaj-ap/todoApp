// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth"
console.log("djas")
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey:
   "AIzaSyAbjX3dT2KXDdSbdtn0Qg6MFa_g-XA23e0",
 authDomain: "proposing-8d4b3.firebaseapp.com",
 projectId: "proposing-8d4b3",
 storageBucket: "proposing-8d4b3.appspot.com",
 messagingSenderId: "314108413518",
 appId:
   "1:314108413518:web:ced3f2ae467597146ee51f",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
