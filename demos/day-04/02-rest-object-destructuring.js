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

// const location = john.address.city, pinCode = john.address.pinCode, age = john.age, secondEmail = john.emails[1];
const {
    age,
    address: {
        city: location,
        ...addressRest
    },
    ...all // { ? }
} = john;

console.log(location, age);
console.log(all);
console.log(addressRest);