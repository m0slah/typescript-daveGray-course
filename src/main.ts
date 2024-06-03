// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    active?: boolean;
    albums: stringOrNumberArray;
}

type userId = stringOrNumber;

// Literal types
let myName: "dave";

let username: "Dave" | "John" | "Amy";

username = "Dave";

const sum = (a: number, b: number) => {
    return a + b;
}

const resultOfSum = sum(6, 8);

console.log(resultOfSum)

const message = (message: any) => {
    return message;
}

const showMessage = message(sum(2, 3));
// const showMessage1=message(sum('a',3)); //Argument of type is not assignable to parameter of typ number

console.log(showMessage);
// console.log(showMessage1);

let subtract = function (firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
}

console.log(subtract(8, 2));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number,
//      b: number): number
// }

let multiply: mathFunction = function (a, b) {
    return a * b;
}

const showMultiplyResult = multiply(2, 10);

console.log("showMultiplyResult: " + showMultiplyResult);

// optional parameter
const addAll = (firstNumber: number, secondNumber: number, thirdNumber?: number): number => {
    if (typeof thirdNumber !== "undefined") {
        return firstNumber + secondNumber + thirdNumber;
    }
    return firstNumber + secondNumber;
}

// default parameter value
const sumAll = (firstNumber: number, secondNumber: number, thirdNumber = 2): number => {

    return firstNumber + secondNumber + thirdNumber;
}

console.log(addAll(1, 100)); //101
console.log(addAll(1, 100, 3)); //104
console.log(addAll(1, 100)); //101

const total = (a: number, ...nums: number[]): number => {
    return nums.reduce((prev, curr) =>
        prev + curr
    )
}

console.log(total(1, 2, 3, 4, 5, 6));

const createError = (errorMessage: string): never => {
    throw new Error(errorMessage)
}

const infinite = () => {
    let i: number = 1;

    while (true) {
        i++;

        if (i > 100)
            break;
    }
}

const isNumber=(value:any):boolean=>{
    return typeof value === "number" ? true : false
}

const isString=(value:any):boolean=>{
    return typeof value === 'string' ? true : false
}

const numberOrString = (data: number | string): string => {
    if (isString(data)) {
        return "string"
    } else if (isNumber(data))
        return "number"
    return createError("this should never happined")
}

const r = numberOrString("1");
console.log(r)
