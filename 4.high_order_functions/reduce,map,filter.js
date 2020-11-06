let arr = [3, 1, 4, 2];

let arrFilt = arr.filter((a) => a >= 2);
console.log(arrFilt);

arrFilt = arrFilt.map((i) => i * 2);
console.log(arrFilt);

let max = arrFilt.reduce((a, b) => Math.max(a, b))
console.log(max);