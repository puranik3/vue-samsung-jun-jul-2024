function sum(x, y, callback) {
    setTimeout(
        () => {
            console.log('inner function executing...');
            // return x + y; // returned value goes to Node js / browser
            callback(x + y);
        },
        3000
    );
};

function multiply(x, y, callback) {
    setTimeout(
        () => {
            console.log('inner function executing...');
            // return x + y; // returned value goes to Node js / browser
            callback(x * y);
        },
        3000
    );
};

sum(12, 13, (result1) => {
    console.log('result1 = ', result1);

    sum(result1, 14, (result2) => {
        console.log('result2 = ', result2);

        multiply(result2, 2, (result3) => {
            console.log('result3 = ', result3);
        })
    });
});