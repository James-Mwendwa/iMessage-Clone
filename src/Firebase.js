import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB84CK0UQ2UWndXo2PciSiplu5gFY_9dng",
  authDomain: "imessage-clone-f3e19.firebaseapp.com",
  projectId: "imessage-clone-f3e19",
  storageBucket: "imessage-clone-f3e19.appspot.com",
  messagingSenderId: "374109331111",
  appId: "1:374109331111:web:b3ebbcf80228dafa8d4582",
  measurementId: "G-8GNBTWFVZK",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export default db;
