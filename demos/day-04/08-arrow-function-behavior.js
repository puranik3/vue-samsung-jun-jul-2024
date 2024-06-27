// Function has a "this". Arrow function does not have its own "this".
console.log(globalThis); // In node and globalThis are different (in browser they are both the same - window object)

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: () => {
        ++this.age;
    }
};

john.celebrateBirthday(); // arrow function used in defintion - "this" was not john object

console.log(john); // did not increase age, because 