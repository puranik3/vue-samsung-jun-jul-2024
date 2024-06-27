// {} in JS -> new Object() in Java
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        pinCode: 560100,
    },
    emails: [
        'john@gmail.com',
        'john@samsung.com'
    ]
};

const johnCompany = {
    name: 'Jonathan',
    empId: 'SMG1234',
    role: 'Tech lead'
}

const johnCopy = {
    spouse: 'Jane',
    ...john, // name: john.name, age: john.age, address: john.address, emails: john.emails
    children: ['Jack', 'Jill'],
    ...johnCompany // name: ....., empId: ......
};

console.log(john === johnCopy); // false - 2 different object

console.log(johnCopy);

johnCopy.address.pinCode = 560050; // john.address.pinCode also changes? - yes?
john.emails.push('john@example.com'); // johnCopy.address.emails also has new email? - yes? 

console.log('---');
console.log(john);
console.log(johnCopy);

// What if we want to make a proper copy? - we can use structuredClone, loadash cloneDeep
const johnDeepCopy = {
    ...john,
    address: {
        ...john.address
    },
    emails: [...john.emails]
};

console.log('---');
console.log(johnDeepCopy);

johnDeepCopy.address.pinCode = 560025;

console.log(john); // not affected
console.log(johnDeepCopy);