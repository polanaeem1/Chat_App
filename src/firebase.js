import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDOf7JThXhdzWskwL6inVh9jvmSft9PuI",
  authDomain: "chat-app-4a7aa.firebaseapp.com",
  projectId: "chat-app-4a7aa",
  storageBucket: "chat-app-4a7aa.appspot.com",
  messagingSenderId: "666500953957",
  appId: "1:666500953957:web:2c6b1c6c93a8311e3dd38c",
  measurementId: "G-PQJ239TWHL",

};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage();

