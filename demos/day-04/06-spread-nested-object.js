const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    },
    emails: [
        'john@gmail.com',
        'john@samsung.com'
    ]
};

const johnCopy = {
    ...john // name: john.name, age: john.age, address: john.address, emails: john.emails
};

console.log(john === johnCopy); // false - 2 different object

console.log(johnCopy);

johnCopy.address.pinCode = 560050; // john.address.pinCode also changes? - yes?
john.emails.push('john@example.com'); // johnCopy.address.emails also has new email? - yes? 

console.log('---');
console.log(john);
console.log(johnCopy);

// What if we want to make a proper copy? - we can use structuredClone, loadash cloneDeep
