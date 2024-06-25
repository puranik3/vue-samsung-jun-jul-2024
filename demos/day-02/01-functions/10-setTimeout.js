// Hey browser / Node! Please execute this function after the given time
// setTimeout is a non-blocking function - it will instruct the browser / node and return immediately
setTimeout(
    () => {
        console.log(1);
    },
    3000 // 3000 ms -> 3 seconds
);

console.log(2);

setTimeout(
    () => {
        console.log(3);
    },
    2000 // 2 seconds
);