function plus(a, b) {
    return new Promise((resolve, reject) => {
        let result = a + b;
        if (result) resolve(result);
        else reject(new Error("!!!!!!!"));
    });
}

function minus(a, b) {
    return new Promise((resolve, reject) => {
        let result = a - b;
        if (result) resolve(result);
        else reject(new Error("!!!!!!!"));
    });
}

plus(3, 2)
    .then((result) => minus(result, 4))
    .then((result) => plus(result, 1))
    .then((result) => plus(result, 3))
    .then((result) => minus(result, 7))
    .then((result) => console.log(result));