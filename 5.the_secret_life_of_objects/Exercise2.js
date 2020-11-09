class prvaKlasa {
    constructor(ime) {
        this.ime = ime;
    }
    funkcija() {
        console.log("funkcija");
    }
}
prvaKlasa.prototype.prezime = "Lelek";

let k1 = new prvaKlasa();


let k2 = new prvaKlasa();
k2.prezime = "Ivanovic";

console.log(k1.prezime);
console.log(k2.prezime);