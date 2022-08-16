// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_6X1oswU29lVjXjcwyavwpniWYJ4cRo",
  authDomain: "reels-5555.firebaseapp.com",
  projectId: "reels-5555",
  storageBucket: "reels-5555.appspot.com",
  messagingSenderId: "888298927703",
  appId: "1:888298927703:web:4ff0f921e97bf341231512"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp()
}

export const storage = firebase.storage()
