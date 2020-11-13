const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [1, 2, 3],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function getArray() {
    let arr = [];
    try {
        arr = box.content;
    } catch {
        box.unlock();
        arr = box.content;
    } finally {
        box.lock();
        return arr;
    }
}

let arr = getArray();
console.log(arr);