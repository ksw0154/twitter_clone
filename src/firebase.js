// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBoIZlGppbIJ7oZrC2gktZkvqWRMZY9-I",
  authDomain: "twitter-clone-df1d0.firebaseapp.com",
  projectId: "twitter-clone-df1d0",
  storageBucket: "twitter-clone-df1d0.appspot.com",
  messagingSenderId: "582943552111",
  appId: "1:582943552111:web:80c4dd652d6c1dd2cc939a",
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig);
