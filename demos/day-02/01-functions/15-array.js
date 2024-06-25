let primes = [2, 3, 5, 7, 11];

primes.push(13);

console.log(primes);

console.log(primes.pop());
console.log(primes.pop());
console.log(primes);

// splice() to add / remove from anywhere in the array
primes = [2, 3, 5, 7, 11, 13, 17, 19];

// remove 2 items from index 3
primes.splice(3, 2);
console.log(primes);

primes = [2, 3, 5, 7, 11, 13, 17, 19];

// add 2 items before index 4 (0 items to remove)
primes.splice(4, 0, 8, 9, 10);
console.log(primes);

// creates a copy of primes array
const newPrimes = primes.slice();
newPrimes.push(23);
console.log(newPrimes); // has 23
console.log(primes); // it does not have 23