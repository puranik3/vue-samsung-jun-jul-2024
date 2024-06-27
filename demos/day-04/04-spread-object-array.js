const persons = [
    { name: 'John', city: 'Bengaluru', age: 32 },
    { name: 'Jane', city: 'Bengaluru', age: 28 },
    { name: 'Mark', city: 'Mumbai', age: 40 },
    { name: 'Mary', city: 'Mumbai', age: 44 },
    { name: 'David', city: 'Delhi', age: 60 },
    { name: 'Dhruv', city: 'Delhi', age: 30 },
];

const personsCopy = [...persons]; // [ persons[0], persons[1], ... ]

console.log(persons === personsCopy); // false

personsCopy.push({
    name: 'Emery',
    city: 'Kolkata',
    age: 10
});

console.log(persons);
console.log(personsCopy);

console.log('---');

++personsCopy[0].age;
persons[1].aadhaarNumber = '1234';

console.log(persons);
console.log(personsCopy);

// structuredClone from JS
// lodash -> cloneDeep

// Use persons.map() and object spread to create a deep copy - personsDeepCopy (one where the objects are proper copies & not shared)