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


database.ref().set({
    name: 'Clint Milner',
    age: 35,
    stress: 6,
    isSingle: false,
    location: {
        city: 'Granby',
        country: 'USA'
    }
})
.then(() => {
    console.log('data saved!');
})
.catch((e) => {
   console.error('save failed', e);
});


database.ref().update({
    name: 'Clinton Joseph Milner',
    age: 36,
    occupation:{
       title: 'Head of Software Development',
       company: 'Rebasoft'
    },
    'location/county': 'Buckinghamshire'
})
.then(()=>{
    console.log('updated');
})
.catch((e) => {
    console.error('bulk update error', e);
});

database.ref('location/city').set('Lane End');
database.ref('location/country').set('Great Britain');
database.ref('attributes').set({
   height: `6 foot`,
   weight: '220 lbs'
}).then(() => {
    console.log('data saved!');
})
.catch((e) => {
    console.error('save failed', e);
});


database.ref('isSingle').remove()
.then(() => {
    console.log('data removed');
})
.catch((e) => {
    console.error('data remove has failed', e);
});


// challenge
database.ref().update({
    stress: 9,
    'occupation/company': 'Craftsy',
    'location/city': 'Denver',
    'location/country': 'USA',
    'location/county': null
})
.then(() => {
    console.log('challenge update complete');
})
.catch((e) => {
    console.error('challenge update error', e);
});

