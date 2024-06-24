/**
 * Write a function sumSquares that creates a new array with squares of numbers in the array
passed to it, and call it like so

const result = sumSquares( [ 1, 2, 3, 4 ] );
console.log( result ); // prints 30

*/
function sumSquares1(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; ++i) {
        // sum = sum + arr[i] * arr[i]
        sum += arr[i] * arr[i]
    }

    return sum;
}

const sumSquares2 = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; ++i) {
        // sum = sum + arr[i] * arr[i]
        sum += arr[i] * arr[i]
    }

    return sum;
}

const sumSquares3 = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; ++i) {
        // sum = sum + arr[i] * arr[i]
        sum += arr[i] * arr[i]
    }

    return sum;
}

const result1 = sumSquares1([1, 2, 3, 4]);
console.log(result1); // prints 30

const result2 = sumSquares2([1, 2, 3, 4]);
console.log(result2); // prints 30

const result3 = sumSquares2([1, 2, 3, 4]);
console.log(result3); // prints 30