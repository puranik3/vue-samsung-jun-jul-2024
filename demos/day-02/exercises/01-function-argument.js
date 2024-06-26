// Write a function sum that accepts 2 numbers(say x and y) and another function (say, transform) as arguments.The transform function should be a function that accepts a number and returns another number - for example, a function square that accepts a number and returns the square of a number.The sum() function applies the transform function on each of x and y and returns the sum of the results of calling transform - for example, sum() would return x2 + y2 if called as sum(x, y, square);

// Example:
// function square(x) { return x * x };
// function cube(x) { return x * x * x };

// console.log(sum(square, 2, 3)); // prints 13 
// console.log(sum(cube, 2, 3)); // prints 35

function sum(transform, ...all) {
    let result = 0;

    for (let i = 0; i < all.length; ++i) {
        result += transform(all[i])
    }

    return result;
}

console.log(sum(x => x * x, 2, 3));
console.log(sum(x => x ** 3, 2, 3));