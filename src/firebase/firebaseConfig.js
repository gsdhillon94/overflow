import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDpEnYIzUMVCc61FEptFs2HKaWV2o4GHgA",
  authDomain: "overflow-digital-solutio-f14cf.firebaseapp.com",
  databaseURL: "https://overflow-digital-solutio-f14cf.firebaseio.com",
  projectId: "overflow-digital-solutio-f14cf",
  storageBucket: "overflow-digital-solutio-f14cf.appspot.com",
  messagingSenderId: "30877096232",
  appId: "1:30877096232:web:04e31e605de2169bb8181d",
  measurementId: "G-NM4PMJ6RWY",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default firebase;
