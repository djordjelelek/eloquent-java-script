Promise.all([
    Promise.resolve(15),
    Promise.resolve(10),
    Promise.resolve(5)
]).then(n => console.log(n));