// objects can be created without explcitly creating a class
// object literal syntax

// const john = {}; // empty object

// objects are dynamic
// objects are a dynamic bag of properties
const john = {
    "first name": 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@samsung.com'
    ],
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    }
};

console.log(john["first name"]);
console.log(john.emails[1]);
console.log(john.address.city);

john["first name"] = "Jonathan";
john.emails[1] = "jonathan@samsung.com";
john.address.pinCode = 560050;

console.log(john);

john.spouse = "Jane";

console.log(john);

// remove "age" property
delete john.age;

console.log(john);