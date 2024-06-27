const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = weekdays[0], second = weekdays[1], third = weekdays[3];
const [first, second, third, ...all] = weekdays;

console.log(first, second, third, all);