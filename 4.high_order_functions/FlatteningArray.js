let arr = [1, 2, 3, [4, 5, 6], 7, [8, 9]];
let reduceArr = arr.reduce((a, b) => a.concat(b), []);
console.log(reduceArr);