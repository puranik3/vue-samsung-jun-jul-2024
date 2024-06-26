// forEach (like a for loop)
// map (generating a new array where every item has a corresponding item)
// filter (to generate a new array with a subset of the items matching some criteria)
// find (to find the first item matching some criteria)
// reduce (to generate a single aggregate value from the array items)
// These methods go through the items in the array one-by-one
const persons = [
    { name: 'John', city: 'Bengaluru', age: 32 },
    { name: 'Jane', city: 'Bengaluru', age: 28 },
    { name: 'Mark', city: 'Mumbai', age: 40 },
    { name: 'Mary', city: 'Mumbai', age: 44 },
    { name: 'David', city: 'Delhi', age: 60 },
    { name: 'Dhruv', city: 'Delhi', age: 30 },
];

// We want this : ['Mark', 'Mary']

// filter -> [
//     { name: 'Mark', city: 'Mumbai', age: 40 },
//     { name: 'Mary', city: 'Mumbai', age: 44 },
// ]
// map -> [ 'Mark', 'Mary' ]
const mumbaikars = persons.filter(person => person.city === 'Mumbai').map(person => person.name);
console.log(mumbaikars);