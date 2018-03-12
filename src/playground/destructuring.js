console.log( 'destructuring.js is running' );

// const person = {
//   name: 'Clint',
//   age: 36,
//   location: {
//       city: 'Lane End',
//       temp: 13
//   }
// };
//
//
// let { name:myName = 'Anonymous', age, location } = person,
//       { city, temp } = location;
//
// console.log( `${myName} is ${age} yrs old` );
//
//
//
// console.info( `It's ${temp} here in ${city}` );
//
//
//
//
// const book = {
//     title: 'The Monkeywrench Gang',
//     author: 'Edward Abbey',
//     publisher: {
//         name: 'Penguin',
//         year: '1974'
//     }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log( publisherName ); // Penguin, self-published


// ===================== ARRAYS ======================= \\



const address = [
    'Woodlands',
    'Marlow Rd',
    'Lane End',
    'Buckinghamshire',
    'UK',
    'HP14 3JP'
];

const [house, road, city, county, country, postcode, planet='Earth'] = address;
console.log( `you are in ${ city } in ${ country } on ${planet}`);
















