function every(array, fun) {
    for (let index = 0; index < array.length; index++) {
        if (fun(array[index])) continue;
        else return false;
    }
    return true;
}
let arr = [1, 2, 3, 4];
console.log(every(arr, (n) => n > 0));

//this line, change upper code
console.log(arr.every((n) => n > 0));