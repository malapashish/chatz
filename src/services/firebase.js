import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCF8y5rUQcZG1G-mad7O2PpmedRTCKF6kQ",
    authDomain: "chatz-cb0dc.firebaseapp.com",
    projectId: "chatz-cb0dc",
    storageBucket: "chatz-cb0dc.appspot.com",
    messagingSenderId: "88966576857",
    appId: "1:88966576857:web:33052bcfa16de6a3af1cc8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();