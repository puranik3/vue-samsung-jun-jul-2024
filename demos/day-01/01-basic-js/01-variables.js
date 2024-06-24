if (true) {
    var x = 1; // old JS - no block scope for "var" variables
    let y = 2; // ES2015 (v6) - "let" variables have block scope
}

console.log('x = ', x); // not error
// console.log('y = ', y); // error

const z = 3; // must give initial value
// z = 4; // error - you cannot reassign

const INR_TO_USD = 83.10;
