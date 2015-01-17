"use strict";

function *it() {
    let i = 0;
    for (; ;) {
        yield i++;
    }
}


let gen = it();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
