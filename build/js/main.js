"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; //more specific
let d = ('world');
let e = ('world');
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const myVal = addOrConcat(1, 2, 'add');
const nextVal = addOrConcat(1, 2, 'concat');
console.log("my value: " + myVal);
console.log("next value: " + nextVal);
//10 as string; //
10; //first must to unknown
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const myNextImg = document.getElementById('#img');
img.src;
myImg.src;
myImg.src;
