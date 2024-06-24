// Array items can have mixed data types
const primes = [2, 3, 5, 7, 11]; // array literal

console.log('primes[2] = ', primes[2]);

primes[2] = 'Five';
primes[5] = 13;
primes[7] = 19; // works!

console.log(primes);
console.log(primes[6]); // undefined

console.log(typeof primes); // "object"
console.log(Array.isArray(primes)); // true

console.log('primes.length = ', primes.length); // 8

const matrix = [
    [2, "Two", "Do"],
    [3, "Three", "Teen"],
    [5, "Five", "Panch"]
];

console.log('matrix[1][2] = ', matrix[1][2]); // "Teen"
