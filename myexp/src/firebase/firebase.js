import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyBodOUzdrMwPEy_ANxAXY7GlHN1Ax9TSgo",
    authDomain: "uxproyect.firebaseapp.com",
    databaseURL: "https://uxproyect.firebaseio.com",
    projectId: "uxproyect",
    storageBucket: "uxproyect.appspot.com",
    messagingSenderId: "933918045067"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const database = firebase.database();
const auth = firebase.auth();


export {
    auth,
    database
};