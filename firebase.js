import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9AYH5_otAB-KblwkqJM33XaSWjL5k2NM",
  authDomain: "auth-de955.firebaseapp.com",
  projectId: "auth-de955",
  storageBucket: "auth-de955.appspot.com",
  messagingSenderId: "1004661613",
  appId: "1:1004661613:web:888509a89aa99e46b74864"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };