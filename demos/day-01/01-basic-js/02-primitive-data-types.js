/**
 * number (int and float), boolean, string
 */
const price = 150.50, quantity = 5;
console.log(typeof price); // "number"

const gm = "Good morning";
const ge = 'Good evening';
const gn = `Good night`;
console.log(typeof gn); // "string"

const name = "John";

const gmJohn = gm + " " + name + "!";
console.log(gmJohn);

const gnJohn = `${gn} ${name}!`;
console.log(gnJohn);

console.log(gn.length); // 10
console.log(gn[5]); // "n"

let isRaining = true;
console.log(typeof isRaining);
isRaining = !isRaining; // false
console.log(isRaining); // false
console.log(typeof isRaining); // "boolean"