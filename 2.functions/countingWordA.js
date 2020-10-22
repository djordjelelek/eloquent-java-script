let counting = function(i) {
    let count = 0;
    for (let index = 0; index < i.length; index++) {
        if (i[index] === 'A') count++;
        else continue;
    }
    return count;
}

console.log(counting("dAnijelA"))