let x = 1; // global variable

console.log('x (global) = ', x);

if (true) {
    let y = 2;
    console.log('y (block) = ', y); // y is blcok-scoped
}

// console.log('y (global) = ', y); // error - y is block-scoped

function f() {
    let f_x = 2;
    console.log('x (f) = ', x); // works since x is global
    console.log('f_x (f) = ', f_x); // works since f_x is scoped to function f

    // you can create a function within another function
    // the scope of f_g is the f function (i.e. f_g can be used only within f)
    function f_g() {
        let f_g_x = 3;
        console.log('I am f_g function');

        console.log('x (f_g) = ', x); // works since x is global
        console.log('f_x (f_g) = ', f_x); // works - inner function like f_g can use outer function's (eg. f) variables
        console.log('f_g_x (f_g) = ', f_g_x); // works
    }

    f_g();
    console.log('f_g_x (f_g) = ', f_g_x); // error
}

f();
// console.log('f_x = ', f_x); // error

// f_g(); // error