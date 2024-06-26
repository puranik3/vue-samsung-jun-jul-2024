const x = 1;

// we cannot reassign
// x = 2; // error

// let's try what is possible / not possible with const variables when dealing with non-primtive types
const john = {
    name: 'John',
    age: 32
};

// we cannot reassign - error
// john = {
//     name: 'John',
//     age: 33
// }

++john.age; // ok

console.log(john);

const primes = [2, 3, 5, 7, 11];
// primes = [2, 3, 5, 7, 11, 13]; // error

primes.push(13); // ok
console.log(primes);