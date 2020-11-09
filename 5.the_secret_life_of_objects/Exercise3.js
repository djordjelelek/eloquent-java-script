class proba {
    constructor(jedan, dva) {
        this.jedan = jedan;
        this.dva = dva;
    }
    get getjedinica() {
        return this.jedan;
    }
    set setjedinica(jedan) {
        this.jedan = jedan;
    }
}

class nastavak extends proba {
    constructor(jedan, dva, tri) {
        super(jedan, dva);
        this.tri = tri;
    }

}
let n = new nastavak(1, 2, 3);


console.log(n instanceof proba);