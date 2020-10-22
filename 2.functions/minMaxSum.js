let min = function(a, b) {
    if (a < b) {
        return a;
    } else return b;
};

function max(a, b) {
    if (a > b) {
        return a;
    } else return b;
}
let sum = (a, b) => {
    return a + b;
};

console.log(min(1, 2));
console.log(max(1, 2));
console.log(sum(1, 2));