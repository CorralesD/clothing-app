import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjshUavaXFTSC-273VLTsCgFJZfttLln4",
  authDomain: "clothing-app-db-d50bc.firebaseapp.com",
  databaseURL: "https://clothing-app-db-d50bc.firebaseio.com",
  projectId: "clothing-app-db-d50bc",
  storageBucket: "clothing-app-db-d50bc.appspot.com",
  messagingSenderId: "878387805311",
  appId: "1:878387805311:web:cbf61e199beae3860e934a",
  measurementId: "G-TLLQM7996G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
