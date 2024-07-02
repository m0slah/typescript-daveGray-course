"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
const BoolCheckValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// console.log(BoolCheckValue(true))
// console.log(BoolCheckValue(false))
// console.log(BoolCheckValue(undefined))
// console.log(BoolCheckValue(0))
// console.log(BoolCheckValue(-1))
// console.log(BoolCheckValue([1,2,3]))
// console.log(BoolCheckValue({name:'name'}))
// console.log(BoolCheckValue({}))
// console.log(BoolCheckValue(''))
// console.log(BoolCheckValue(null ))
// const loggingIdentity=<Type>(arg: Type[]): Type[]=> {
//     console.log(arg.length);
//     return arg;
// }
//
// loggingIdentity(["hello"])
const loggingIdentity = (arg) => {
    console.log(arg.length);
    return arg;
};
function identity(arg) {
    return arg;
}
let myIdentity = identity;
