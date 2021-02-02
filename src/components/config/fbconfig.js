import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYLIuQI61cF51JZUpcp0Bt_2S2VbGGHBw",
  authDomain: "apiproject-ab3c6.firebaseapp.com",
  projectId: "apiproject-ab3c6",
  storageBucket: "apiproject-ab3c6.appspot.com",
  messagingSenderId: "1085409472848",
  appId: "1:1085409472848:web:2a6387118516ecad99bc55"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;