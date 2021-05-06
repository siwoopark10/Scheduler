import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbKQU251jxnu8kwTbvPstMP9aeZGPUPd0",
    authDomain: "scheduler394-a66c4.firebaseapp.com",
    databaseURL: "https://scheduler394-a66c4-default-rtdb.firebaseio.com",
    projectId: "scheduler394-a66c4",
    storageBucket: "scheduler394-a66c4.appspot.com",
    messagingSenderId: "238573109285",
    appId: "1:238573109285:web:27d0552f62deedc50bbfcc",
    measurementId: "G-GLQQXLTDNW"
};

async function loginWithEmail(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

async function registerWithEmail(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

firebase.initializeApp(firebaseConfig);


export { firebase, loginWithEmail, registerWithEmail };