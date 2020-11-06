function forLoop(start, testF, updateF, bodyF) {
    for (let value = start; testF(value); value = updateF(value)) {
        bodyF(value);
    }
}
forLoop(
    5,
    (i) => i < 10,
    (i) => i + 1,
    console.log
);

forLoop(
    1,
    (i) => i < 10,
    (i) => i + 2,
    console.log
);