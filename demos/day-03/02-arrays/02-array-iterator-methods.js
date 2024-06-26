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

persons.forEach((item, idx) => {
    ++item.age;
    console.log(idx);
});

console.log(persons);

const personNames = persons.map(item => item.name);
console.log(personNames);

const personDetails = persons.map(item => {
    return {
        name: item.name,
        age: item.age
    };
});
console.log(personDetails);

const bengalureans = persons.filter(item => item.city === 'Bengaluru');
console.log(bengalureans);

const firstMumbaikar = persons.find(item => item.city === 'Mumbai');
console.log(firstMumbaikar);

// (0, { name: 'John', city: 'Bengaluru', age: 32 }) => 32
// (32, { name: 'Jane', city: 'Bengaluru', age: 28 }) => 32
// (32, { name: 'Mark', city: 'Mumbai', age: 40 }) => 40
// (40, { name: 'David', city: 'Delhi', age: 60 }) => 60
// (60, { name: 'Dhruv', city: 'Delhi', age: 30 }) => 60
const maxAge = persons.reduce((acc, item) => item.age > acc ? item.age : acc, 0);
console.log(maxAge);

const maxAgedPerson = persons.reduce((acc, item) => item.age > acc.age ? item : acc, { age: 0 });
console.log(maxAgedPerson);