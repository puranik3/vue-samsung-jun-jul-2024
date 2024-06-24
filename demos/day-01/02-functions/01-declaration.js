// There are 2 passes through the code when it is executed

const result = add(12, 13);
console.log('result = ', result);

// function declaration - created in 1st pass through the code
function add(x, y) {
    const result = x + y;
    return result;
}

// console.log('sum(12, 13) = ', sum(12, 13)); // error - uncomment to check

// anonymous function expression - not created in 1st pass through the code
// This function is created in the 2nd pass (just-in-time)
const sum = function (x, y) {
    return x + y;
};

console.log('sum(12, 13) = ', sum(12, 13));

// arrow function
const sum2 = (x, y) => {
    return x + y;
};

console.log('sum2(12, 13) = ', sum2(12, 13));

// If you have single line that returns something, then you can omit both {} and return keyword together
const sum3 = (x, y) => x + y;

console.log('sum3(12, 13) = ', sum3(12, 13));

// if you have a function with EXACTLY 1 argument, you can omit the () around the argument
// const square = (x) => x * x;
const square = x => x * x;
console.log(square(12));

