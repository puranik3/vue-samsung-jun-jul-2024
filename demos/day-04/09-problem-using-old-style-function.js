const john = {
    name: 'John',
    surname: 'Doe',
    age: 32,
    children: [
        { name: 'Jack', age: 10 },
        { name: 'Jill', age: 12 },
    ],
    celebrateBirthday: function () {
        ++this.age;
    },
    addSurnamesToChildren() {
        console.log('this addSurnamesToChildren = ', this);
        const johnRef = this;

        this.children.forEach(

            // has its own "this" (globalThis)
            // function (child) {
            //     console.log('this forEach iterator function = ', this);
            //     child.name = child.name + ' ' + johnRef.surname
            // }

            // does not have its own scope - refers to the nearest scope's "this" (here it is the "this" within addSurnamesToChildren - i.e john)
            (child) => {
                console.log('this forEach iterator function = ', this);
                child.name = child.name + ' ' + this.surname
            }

        )
    }
};

john.addSurnamesToChildren();
console.log(john);
