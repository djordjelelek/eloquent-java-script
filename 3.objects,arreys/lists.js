let obj1 = {
    name: "Djordje",
    surname: "Lelek",
    nationality: "RS",
    underobject: {
        pol: "M",
        status: "nezaposlen"
    }
};
let obj2 = {
    name: "Danijela",
    surname: "Ivanovic",
    nationality: "SRB",
    obj1
};

obj2.obj1.name = "NoName";
delete obj2.obj1;
console.log(obj1);
console.log(obj2);