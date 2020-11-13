function sum(a, b) {
    try {
        if (isNaN(a) && isNaN(b)) throw new Error();
        else console.log(a + b);
    } catch {
        console.log("Not a number");
    } finally {
        console.log("end of program!");
    }
}

sum(1, 2);
sum("something", 2);