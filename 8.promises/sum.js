function sum(a, b) {
    return new Promise((resolve, reject) => {
        let sum = a + b;
        if (sum > 0) resolve(sum);
        else reject(new Error("!!!!!!!"));
    });
}
sum(5, 2)
    .then((r) => console.log(r))
    .catch((r) => console.log(r));
sum(-1, 0)
    .then((r) => console.log(r))
    .catch((r) => console.log(r));