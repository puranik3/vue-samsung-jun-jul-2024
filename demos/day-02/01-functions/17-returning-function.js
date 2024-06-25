const persons = [
    { name: 'John', city: 'Bengaluru' },
    { name: 'Jane', city: 'Bengaluru' },
    { name: 'Mark', city: 'Mumbai' },
    { name: 'Mary', city: 'Mumbai' },
    { name: 'David', city: 'Delhi' },
];

// Assumption: key's value is a string or a number
function getSorterFunction(key) {
    return (item1, item2) => {
        if (item1[key] < item2[key]) {
            return -1; // to indicate that first argument passed (item1) comes alphabetically before
        } else if (item1[key] > item2[key]) {
            return 1;
        } else {
            return 0;
        }
    }
}

const nameSorter = getSorterFunction('name');
const citySorter = getSorterFunction('city');

persons.sort(nameSorter);
console.log(persons);

persons.sort(citySorter);
console.log(persons);
