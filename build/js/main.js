"use strict";
// Literal types
let myName;
let username;
username = "Dave";
const sum = (a, b) => {
    return a + b;
};
const resultOfSum = sum(6, 8);
console.log(resultOfSum);
const message = (message) => {
    return message;
};
const showMessage = message(sum(2, 3));
// const showMessage1=message(sum('a',3)); //Argument of type is not assignable to parameter of typ number
console.log(showMessage);
// console.log(showMessage1);
let subtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
console.log(subtract(8, 2));
// interface mathFunction {
//     (a: number,
//      b: number): number
// }
let multiply = function (a, b) {
    return a * b;
};
const showMultiplyResult = multiply(2, 10);
console.log("showMultiplyResult: " + showMultiplyResult);
// optional parameter
const addAll = (firstNumber, secondNumber, thirdNumber) => {
    if (typeof thirdNumber !== "undefined") {
        return firstNumber + secondNumber + thirdNumber;
    }
    return firstNumber + secondNumber;
};
// default parameter value
const sumAll = (firstNumber, secondNumber, thirdNumber = 2) => {
    return firstNumber + secondNumber + thirdNumber;
};
console.log(addAll(1, 100)); //101
console.log(addAll(1, 100, 3)); //104
console.log(addAll(1, 100)); //101
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4, 5, 6));
const createError = (errorMessage) => {
    throw new Error(errorMessage);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
const numberOrString = (data) => {
    if (isString(data)) {
        return "string";
    }
    else if (isNumber(data))
        return "number";
    return createError("this should never happined");
};
const r = numberOrString("1");
console.log(r);
