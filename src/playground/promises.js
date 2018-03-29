console.log( 'promises.js' );

const promise = new Promise((resolve, reject) => {
    // long-running async task

    setTimeout(() => {
        resolve('This is my resolved data');
    }, 1500);

    reject('rejected error msg');
});

console.log('before');

promise.then((resolveData) => {
    console.info(resolveData);
})
.catch((error) => {
   console.error(error);
});

console.log('after');