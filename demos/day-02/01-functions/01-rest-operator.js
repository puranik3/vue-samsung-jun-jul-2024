// function sum(x, ...all) {
//     console.log(x);
//     console.log(all);
// }

function sum(...all) {
    let result = 0;

    for (let i = 0; i < all.length; ++i) {
        result += all[i];
    }

    return result;
}

console.log(sum(12)); // all = [].
console.log(sum(12, 13));
console.log(sum(12, 13, 14));