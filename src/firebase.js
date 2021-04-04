import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAXpAtJjljTNii-k7uCW322CpSOAz56jB8",
  authDomain: "challenge-470fd.firebaseapp.com",
  projectId: "challenge-470fd",
  storageBucket: "challenge-470fd.appspot.com",
  messagingSenderId: "394990208991",
  appId: "1:394990208991:web:8f5541e5d8b1262771666a",
  measurementId: "G-G1WZMBSBW8"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
 

export { db , auth }; 
