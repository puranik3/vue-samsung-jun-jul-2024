class Person {
    nationality = 'Indian';

    constructor(name, age) {
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

class Employee extends Person {
    company = 'Samsung';

    constructor(name, age, role, dept) {
        super(name, age);

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        this.couponValue = 2000;
    }
}

const john = new Employee('John', 32, 'Engineer', 'IT'); // { nationality: 'Indian' }

john.celebrateBirthday();
john.setNationality('USA');
john.promote();

console.log(john);