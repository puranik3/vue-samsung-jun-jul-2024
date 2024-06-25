// f is executed asynchronously
setTimeout(
    () => { // f
        console.log(1);
    },
    0
);

console.log(2);

// ...