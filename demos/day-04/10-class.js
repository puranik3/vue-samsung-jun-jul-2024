class Person {
    // You also have static data members and methods

    nationality = 'Indian';
    // name;
    // age;

    constructor(name, age) {
        console.log(this); // { nationality: 'Indian' }
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        ++this.age;
    }

    setNationality(newNationality) {
        this.nationality = newNationality;
    }
}

const john = new Person('John', 32);

john.spouse = 'Jane';

john.celebrateBirthday();
john.setNationality('USA');

console.log(john);