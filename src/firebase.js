import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
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
export const db = getFirestore(app)
const auth = getAuth(app)
export default auth
