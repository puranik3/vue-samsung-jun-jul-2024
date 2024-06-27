const primes = [2, 3, 5, 7, 11];
const primesAnother = primes;

primesAnother.push(13);

console.log(primes); // has 13 
console.log(primesAnother); // has 13

console.log(primes === primesAnother); // true (true since they are referring to the SAME array in memory)

const primesYetAnother = [...primes];

primesYetAnother.push(17);

console.log('---');

console.log(primes); // 17 is absent
console.log(primesYetAnother);
console.log(primes === primesYetAnother); // false