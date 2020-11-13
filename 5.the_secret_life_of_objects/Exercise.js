function normalize() {
    console.log(this.array);
}

normalize.call({ array: [1, 2, 3, 4] })