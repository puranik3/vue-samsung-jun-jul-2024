function sum(x, y) {
    return new Promise((resolve, reject) => {
        // console.log(resolve);
        // console.log(reject);

        setTimeout(
            () => {
                // console.log('inner function executing...');
                // return x + y; // returned value goes to Node js / browser
                resolve(x + y); // I am done. Here is the result.
            },
            3000
        );
    });

};

function multiply(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(x * y);
            },
            3000
        );
    });
};

// Any Promise object has 2 methods - then(), catch()
const promise = sum(12, 13);

// the callback passed to then() is called ONLY if the promise resolves, and the resolved value is passed to it
promise
    .then((result1) => {
        console.log(result1);

        return sum(result1, 14);
    }) // p2
    .then((result2) => {
        console.log(result2);

        return multiply(result2, 2);
    })
    .then((result3) => {
        console.log(result3);

        return 100;
    })
    .then((result4) => {
        console.log(result4);
    });


// .then((result2) => {
//     console.log(result2);

//     multiply(result2, 2).then((result3) => {
//         console.log(result3);
//     });
// });