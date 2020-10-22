let isEven = (i) => {
    if (i === 1) {
        return false;
    } else if (i === 0) {
        return true;
    } else {
        return isEven(i - 2);
    }
};

console.log(isEven(7));