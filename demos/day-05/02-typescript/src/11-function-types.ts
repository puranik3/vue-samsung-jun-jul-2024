function add(x: number, y: number) {
    return x + y;
}

function sum(x: number, y: number) : number {
    return x + y;
}

// syntax as above but for function expression syntax
// const addition = function(x : number, y : number) {
//     return x + y;
// }

type BinaryFunction = (x : number, y: number) => number;

const addition : BinaryFunction = function(x, y) {
    return x + y;
}

addition(12, 13, 14);
addition(12, 'hello');

function map(arr : any[], mapper : (item : any) => any ) {
    const result = [];

    for (let i = 0; i < arr.length; ++i) {
        // Given the array item, we want the city to be pushed to the generated array
        result.push(mapper(arr[i]));
    }

    return result;
}

const primes = [ 2, 3, 5, 7, 11 ];

map( primes, item => item * 2 );
map( { name: 'John'}, item => item * 2);
map( primes, 10 );
// map( primes, () => 100 );