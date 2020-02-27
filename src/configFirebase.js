import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBYtFR3c1xl7n5c8nac3HjJiX4ZN4W_Yh0",
    authDomain: "neos-71307.firebaseapp.com",
    databaseURL: "https://neos-71307.firebaseio.com",
    projectId: "neos-71307",
    storageBucket: "neos-71307.appspot.com",
    messagingSenderId: "106265079673",
    appId: "1:106265079673:web:1754f861339917026f09a8",
    measurementId: "G-HQMXJYX9M5"
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

const storage = firebase.storage()

const messaging = firebase.messaging()

export default {
    db,
    storage,
    messaging
}
