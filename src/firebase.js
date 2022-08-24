import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
   apiKey: 'AIzaSyDMRFMnjSfexmCTfjRB3DQtQB5tQgTgye4',
   authDomain: 'yt-clone-ea6a5.firebaseapp.com',
   projectId: 'yt-clone-ea6a5',
   storageBucket: 'yt-clone-ea6a5.appspot.com',
   messagingSenderId: '291325301429',
   appId: '1:291325301429:web:ec32de453c0ef9a7d924fc',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDMRFMnjSfexmCTfjRB3DQtQB5tQgTgye4",
   authDomain: "yt-clone-ea6a5.firebaseapp.com",
   projectId: "yt-clone-ea6a5",
   storageBucket: "yt-clone-ea6a5.appspot.com",
   messagingSenderId: "291325301429",
   appId: "1:291325301429:web:37f8d944b67fa676d924fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;*/
