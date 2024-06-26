// Many string methods accept regular expression arguments

const quote = 'With great power comes great responsibility';
console.log(`${quote.substring(0, 10)}...`);

console.log("quote.includes('great') = ", quote.includes('great')); // true
console.log("quote.includes('hello') = ", quote.includes('hello')); // false

// /with/ -> regular expression pattern
console.log(quote.includes('with')); // false 

console.log(quote.search('with')); // -1
console.log(quote.search(/with/i)); // 0
console.log(quote.search(/GREAT/i)); // 5

console.log(quote.toUpperCase());
console.log(quote); // has not changed

// [ 'With', 'great', 'power', 'comes', 'great', 'responsibility' ]
console.log(quote.split(' '));
