import {initializeApp} from "firebase/app";
import {getFirestore, getDocs, getDoc, collection, setDoc, doc, limit ,query, Timestamp, orderBy, startAfter, startAt} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMMPoejiEg248UtosRKLQcyhyJUUMZou8",
  authDomain: "dictionary-challenge-72879.firebaseapp.com",
  projectId: "dictionary-challenge-72879",
  storageBucket: "dictionary-challenge-72879.appspot.com",
  messagingSenderId: "251849160445",
  appId: "1:251849160445:web:233629585477ccbfaf3094"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export {firestore, getDocs, getDoc, collection, setDoc, doc, limit, query, Timestamp, orderBy, startAfter, startAt };
