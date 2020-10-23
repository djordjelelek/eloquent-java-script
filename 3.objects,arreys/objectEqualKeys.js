const deepEqual = (object1, object2) => {
    let array1 = Object.keys(object1);
    let array2 = Object.keys(object2);
    if (array1.length !== array2.length) return false;
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] === array2[index]) continue;
        else return false;
    }
    return true;
};
let obj1 = {
    name: "Djordje",
    surname: "Lelek",
    nationality: "RS"
};
let obj2 = {
    name: "Danijela",
    surname: "Ivanovic",
    nationality: "SRB"
};
console.log(deepEqual(obj1, obj2));