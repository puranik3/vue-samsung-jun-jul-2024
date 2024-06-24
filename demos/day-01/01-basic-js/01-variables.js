if (true) {
    var x = 1; // old JS - no block scope for "var" variables
    let y = 2; // ES2015 (v6) - "let" variables have block scope
}

console.log('x = ', x); // not error
console.log('y = ', y); // error