// sum returns undefined immediately
function sum(x, y, callback) {
    // const adder = () => {
    //     return x + y;   
    // }
    setTimeout(
        () => {
            console.log('inner function executing...');
            // return x + y; // returned value goes to Node js / browser
            callback(x + y);
        },
        3000
    );
};

// const result = 
sum(12, 13, (result) => {
    // we want to print the value
    console.log('result = ', result);
});