const john = {
    name: 'John',
    city: 'Bengaluru',
    age: 32
};

const johnCopy = {
    ...john // name: john.name, city: john.city, age: john.age
};

console.log(john === johnCopy); // false - 2 different object

console.log(johnCopy);