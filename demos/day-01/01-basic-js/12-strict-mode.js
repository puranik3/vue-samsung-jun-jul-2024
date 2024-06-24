'use strict';

x = 1; // please don't do this - ALWAYS creates global variables

function f() {
    // 'use strict';

    x = 2; // you are not creating a new variable, you are overwriting it (probably by mistake)
    y = 2; // not function-scoped - this is a global variable
}

f();

console.log('x =', x); // is 2 now
// console.log('y =', y); // is accessible as y is actually global

// We do not want to create variables without using let / const -> these create global variables -> is bad
// Even by mistake I do not want to omit let / const when declaring a variable