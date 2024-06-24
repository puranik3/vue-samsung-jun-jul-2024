'use strict';

// objects can be created without explcitly creating a class
// object literal syntax

// const john = {}; // empty object

// objects are dynamic
// objects are a dynamic bag of properties
// console.log(this); // global

const jonathan = {
    "first name": 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@samsung.com'
    ],
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    },
    // celebrateBirthday: function () {
    //     ++this.age;
    // },
    celebrateBirthday() {
        ++this.age;
    }

    // generally we don't use arrow function syntax here
    // celebrateBirthday: () => {
    //     ++this.age; // in arrow function method, "this" does not refer to the object within which the method exists
    // }
};

jonathan.celebrateBirthday();

console.log(jonathan);
console.log(this);