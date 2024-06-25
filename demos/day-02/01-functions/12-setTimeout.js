// f is executed asynchronously
setTimeout(
    () => { // f
        console.log(1);
    },
    0
);

console.log(2);

for (let i = 0; i < 1000_000_000_0; ++i) {
    ;
}