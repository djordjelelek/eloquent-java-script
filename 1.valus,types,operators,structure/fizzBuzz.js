for (let index = 0; index <= 101; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
        continue;
    } else if (index % 3 === 0) {
        console.log("Fizz");
        continue;
    } else if (index % 5 === 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(index);
    }
}