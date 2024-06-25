// The name "add" is a reference to the function in memory
function add(x, y) {
    return x + y;
}

console.log(add(12, 13));

// sum, add will refer to the SAME function in memory
const sum = add;

console.log(sum(12, 13));
