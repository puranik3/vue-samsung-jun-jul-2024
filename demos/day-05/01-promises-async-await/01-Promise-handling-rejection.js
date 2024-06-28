function sum(x, y) {
    return new Promise((resolve, reject) => {
        // console.log(resolve);
        // console.log(reject);

        setTimeout(
            () => {
                if (typeof x !== 'number' || typeof y !== 'number') {
                    reject(new Error('both arguments should be numbers'));
                    return;
                }

                resolve(x + y);
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

// the callback passed to then() is called ONLY if the promise resolves, and the resolved value is passed to it
sum(12, 13)
    .then((result1) => {
        console.log(result1);

        return sum(result1, 'hello');
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
    })
    .catch(error => {
        console.log(error.message);
    });