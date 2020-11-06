function math(m) {
    return (...args) => m(...args);
}
console.log(math(Math.max)(1, 2, 3, 4));

let arr = [1, 2, 3, 4];
console.log(arr.reduce((a, b) => math(Math.min)(a, b)));