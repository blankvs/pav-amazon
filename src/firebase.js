import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7_Fpfel5Y6X4Lw8UrhTzKNNDa1HtTFhs",
  authDomain: "clone-project-be286.firebaseapp.com",
  projectId: "clone-project-be286",
  storageBucket: "clone-project-be286.appspot.com",
  messagingSenderId: "420809594090",
  appId: "1:420809594090:web:4f0ce164ed14d4f8327393",
  measurementId: "G-N2WM065EF6",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
