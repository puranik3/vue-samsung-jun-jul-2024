import { format } from "date-fns";

const d = new Date();
console.log(d.toISOString());

const newYearDay2023 = new Date(2023, 0);
console.log(newYearDay2023);

console.log(d - newYearDay2023);

console.log(newYearDay2023 < d); // true

// date-fns, moment
console.log(format(new Date(2014, 1, 11), "dd/MM/yyyy"));