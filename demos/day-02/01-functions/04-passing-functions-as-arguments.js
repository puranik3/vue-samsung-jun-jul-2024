// functions can be passed as arguments to other functions
const persons = [
    { name: 'John', city: 'Bengaluru' },
    { name: 'Jane', city: 'Bengaluru' },
    { name: 'Mark', city: 'Mumbai' },
    { name: 'Mary', city: 'Mumbai' },
    { name: 'David', city: 'Delhi' },
];

// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]

function map(arr, mapper) {
    const result = [];

    for (let i = 0; i < arr.length; ++i) {
        // Given the array item, we want the city to be pushed to the generated array
        result.push(mapper(arr[i]));
    }

    return result;
}

function iterator(item) {
    return item.name;
}

console.log(map(persons, iterator)); // arr = persons, mapper = iterator

// We can create the mapper function just as we call map
const result = map(persons, item => `${item.name} lives in ${item.city}`);
console.log(result);