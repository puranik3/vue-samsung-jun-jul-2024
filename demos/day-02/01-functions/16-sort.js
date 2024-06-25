const persons = [
    { name: 'John', city: 'Bengaluru' },
    { name: 'Jane', city: 'Bengaluru' },
    { name: 'Mark', city: 'Mumbai' },
    { name: 'Mary', city: 'Mumbai' },
    { name: 'David', city: 'Delhi' },
];

persons.sort((item1, item2) => {
    if (item1.name < item2.name) {
        return -1; // to indicate that first argument passed (item1) comes alphabetically before
    } else if (item1.name > item2.name) {
        return 1;
    } else {
        return 0;
    }
});

persons.sort((item1, item2) => {
    if (item1.city < item2.city) {
        return -1; // to indicate that first argument passed (item1) comes alphabetically before
    } else if (item1.city > item2.city) {
        return 1;
    } else {
        return 0;
    }
});

console.log(persons);
