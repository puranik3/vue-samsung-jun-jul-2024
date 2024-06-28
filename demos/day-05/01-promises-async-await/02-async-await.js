function sum(x, y) {
    return new Promise((resolve, reject) => {
        // console.log(resolve);
        // console.log(reject);

        setTimeout(() => {
            if (typeof x !== "number" || typeof y !== "number") {
                reject(new Error("both arguments should be numbers"));
                return;
            }

            resolve(x + y);
        }, 3000);
    });
}

function multiply(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x * y);
        }, 3000);
    });
}

async function doSomething() {
    // console.log(1);

    try {
        const result1 = await sum(12, "hello");
        console.log(result1);
        const result2 = await sum(result1, 14);
        console.log(result2);
    } catch (error) {
        console.log(error.message);
    }
    // console.log(2);
}

doSomething();
// console.log(3);

// for (let i = 0; i < 1000_000_000_0; ++i) {
//     ;
// }
