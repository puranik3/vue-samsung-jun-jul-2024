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
    }
};

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