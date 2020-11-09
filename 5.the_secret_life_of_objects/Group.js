class Group {
    constructor(...args) {
        this.member = [...args];
    }
    add(value) {
        if (!this.has(value)) this.member.push(value);
    }
    delete(value) {
        this.member = this.member.filter(v => v !== value);
    }
    has(value) {
        return this.member.includes(value);
    }

}

let gr = new Group();
gr.add(1);
gr.add(2);
gr.delete(1);
console.log(gr.member);