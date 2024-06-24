// any function can accept any number of arguments
function foo(x, y) {
    console.log('x = ', x);
    console.log('y = ', y);
}

foo(12, 13);
foo(12, 13, 14); // works! x = 12, y = 13
foo(12); // works! - x = 12, y = undefined (uninitialized variable)