let reversArrey = (array = []) => {
    let reverse = [];
    let count = 0;
    for (let index = array.length - 1; index >= 0; index--) {
        reverse[count] = array[index];
        count++;

    }
    return reverse;

}
let forReverse = [1, 2, 3, 4];
let arr = reversArrey(forReverse);
console.log(arr);