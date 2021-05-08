import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyCF8y5rUQcZG1G-mad7O2PpmedRTCKF6kQ",
    authDomain: "chatz-cb0dc.firebaseapp.com",
    databaseURL: "https://chatz-cb0dc-default-rtdb.firebaseio.com",
    projectId: "chatz-cb0dc",
    storageBucket: "chatz-cb0dc.appspot.com",
    messagingSenderId: "88966576857",
    appId: "1:88966576857:web:33052bcfa16de6a3af1cc8"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();