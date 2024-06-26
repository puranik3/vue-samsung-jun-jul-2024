// let's run this in the browser
function foo() {
    console.log(this);
}

foo(); // this -> global object

// one object can "borrow methods" from another object
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
    celebrateBirthday(increaseBy) {
        this.age += increaseBy;
    },
    changeAddress(city, pinCode) {
        if (city != undefined) {
            this.address.city = city;
        }

        if (pinCode !== undefined) {
            this.address.pinCode = pinCode;
        }
    }
};

// jonathan = {} // with let we can do this, but not with const

const jane = {
    "first name": 'Jane',
    age: 28,
    emails: [
        'jane@gmail.com',
        'jane@samsung.com'
    ],
    address: {
        city: 'Bengaluru',
        pinCode: 560100
    }
};

jonathan.celebrateBirthday(10);
console.log(jonathan);

// You can decide what is the context for a function when it is called
// .call() calls the underlying function jonathan.celebrateBirthday, but with a different context ("this")
jonathan.celebrateBirthday.call(jane, 5); // this -> jane, changeBy -> 5
console.log(jane);

// jonathan.changeAddress.call(jane, 'Mumbai', 400050);
// console.log(jane);

jonathan.changeAddress.apply(jane, [undefined, 560050]);
console.log(jane);

const changeJohnPinCode = jonathan.changeAddress.bind(jonathan, 'Mumbai');
changeJohnPinCode(400020);
console.log(jonathan);

changeJohnPinCode(400010);
console.log(jonathan);