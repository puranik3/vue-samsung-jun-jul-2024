const persons = [
    {
        name: 'John',
        salary: 1000,
        age: 32,
        emails: [
            'john@gmail.com',
            'john@example.com'
        ]
    },
    {
        name: 'Jane',
        age: 28,
        salary: 2000,
        emails: [
            'jane@gmail.com',
            'jane@example.com',
            'jane@yahoo.com',
        ]
    },
    {
        name: 'Mark',
        age: 46,
        salary: 3000,
        emails: [
            'mark@gmail.com',
            'mark@example.com'
        ]
    },
    {
        name: 'Mary',
        age: 44,
        salary: 4000,
        emails: [
            'mary@gmail.com',
            'mary@example.com'
        ]
    }
];

// Find all persons whose age is 35 years or older 
// filter()
const personsOlderThan35 = persons.filter(person => person.age >= 35);
console.log(personsOlderThan35)

// Find a person who has at least 3 email ids 
// find()
const firstPersonWithAtLeast3EmailIds = persons.find(person => person.emails.length >= 3);
console.log(firstPersonWithAtLeast3EmailIds);

// Find the sum of salaries for all persons 
// reduce()
persons.reduce((acc, person) => acc + person.salary, 0);

// Get a list of users along with their first email id.The result should be an array like this.
// map()
// [
//     {
//         name: 'John',
//         email: 'john@gmail.com'
//     },
//     {
//         name: 'Jane',
//         email: 'jane@gmail.com'
//     },
//     {
//         name: 'Mark',
//         email: 'mark@gmail.com'
//     },
//     {
//         name: 'Mary',
//         email: 'mary@gmail.com'
//     }
// ];
const personDetails = persons.map(person => {
    return {
        name: person.name,
        email: person.emails[0]
    }
});
console.log(personDetails);
