function insert() {
    let list = document.getElementsByTagName("li");
    document.getElementById("list").insertBefore(list[1], list[0]);
}

function* generator() {
    yield 4;
    yield 5;
    yield 6;
}
let gen = generator();

function append() {
    let node = document.createElement("li");
    let text = document.createTextNode(gen.next().value);
    node.appendChild(text);
    document.getElementById("list").appendChild(node);
}

function replace() {
    var element = document.createElement("li");
    var textnode = document.createTextNode("first");
    element.appendChild(textnode);

    var item = document.getElementById("list");
    item.replaceChild(element, item.getElementsByTagName("li")[0]);
}