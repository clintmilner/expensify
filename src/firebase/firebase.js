import * as firebase from 'firebase';

// Firebase config
const config = {
    apiKey: "AIzaSyA-8YqZoOvjzWbP00-HZAIRagXRu9c-Mk8",
    authDomain: "expensify-311.firebaseapp.com",
    databaseURL: "https://expensify-311.firebaseio.com",
    projectId: "expensify-311",
    storageBucket: "expensify-311.appspot.com",
    messagingSenderId: "718581862917"
};

// Initialize Firebase
firebase.initializeApp(config);

// setting temp data to the database
const database = firebase.database();

export { firebase, database as default };