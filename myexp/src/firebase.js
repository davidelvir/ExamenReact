// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyCkIlcDoCbsyfw8ZSeV6pFPHVi9_xRMUzw",
    authDomain: "vans-507b3.firebaseapp.com",
    databaseURL: "https://vans-507b3.firebaseio.com",
    projectId: "vans-507b3",
    storageBucket: "vans-507b3.appspot.com",
    messagingSenderId: "445775570902"
};
export default firebase.initializeApp(config);