function print1(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
print1(5);


function print2(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

print2(5, console.log);

let p = [];
print2(5, a => p.push(a))
console.log(p);