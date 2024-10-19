import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZ7X8yAcEyzdXaea-xqFeFCXOoQKmBoHY",
  authDomain: "chat-app-b6cae.firebaseapp.com",
  projectId: "chat-app-b6cae",
  storageBucket: "chat-app-b6cae.appspot.com",
  messagingSenderId: "1002557892531",
  appId: "1:1002557892531:web:63c7f0185fd8c234810dc6",
  measurementId: "G-DK29CMB4JM"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage();

