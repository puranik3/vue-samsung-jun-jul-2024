function greet(name = 'World', message = 'Hello') {
    return `${message} ${name}!`;
}

console.log(greet('John', 'Good morning'));
console.log(greet('John'));
console.log(greet());
console.log(greet(undefined, 'Good evening'));