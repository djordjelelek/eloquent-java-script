let createArrey = (first, last) => {
    let array = [];
    if (first > last) {
        for (first; first <= last; first++) {
            array.push(first);
        }
        return array;
    } else {
        for (first; first >= last; first--) {
            array.push(first);
        }
        return array;
    }
}

let arr = createArrey(4, 1);
console.log(arr);