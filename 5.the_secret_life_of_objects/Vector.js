class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(x, y) {
        return new Vec(this.x + x, this.y + y);
    }
    minus(x, y) {
        return new Vec(this.x - x, this.y - y);
    }
}

let vec1 = new Vec(1, 2);
let vec2 = vec1.plus(5, 6);
let vec3 = vec1.minus(2, 3);

console.log(vec1);
console.log(vec2);
console.log(vec3);