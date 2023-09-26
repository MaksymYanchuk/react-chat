import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyBsSKw4j6HLT8vnZkfHXh-0Q1AgbFKmgYo",
  authDomain: "chat-80534.firebaseapp.com",
  projectId: "chat-80534",
  storageBucket: "chat-80534.appspot.com",
  messagingSenderId: "101158026451",
  appId: "1:101158026451:web:8894a73ebb0f9aa193a826",
  measurementId: "G-9WGPSEFLEP"
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
