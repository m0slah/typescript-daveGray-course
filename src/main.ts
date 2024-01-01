let stringArr = ["one", "two", "three"];

let playerName = ["palmer", "chelsea", 19];

let mixedData = ["test", 12, true];

// stringArr[0] = 12; //Type 'number' is not assignable to type 'string'
stringArr[0] = "anotherNumber";

playerName[2] = 10;
playerName[0] = "mudrik";
playerName.unshift("test");

mixedData.push("hello");
mixedData.push(12);
mixedData.push(false);

let test = [];
let bands: string[] = [];

bands.push("one");
// bands.push(12); //Argument of type 'number' is not assignable to parameter of type 'string'.
// bands.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.

let myTuple: [string, number, boolean];
myTuple = ["mo", 11, true];
mixedData = ["test", 1, false];

mixedData = myTuple;
// myTuple = mixedData; // Target requires 3 element(s) but source may have fewer.

myTuple[0] = "testing";
// myTuple[0] = 1; //Type 'number' is not assignable to type 'string'.

//Objects
let myObj: object;
myObj = [];

console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObject = {
  name: "John Doe",
  age: 34,
};

exampleObject.name = "another name";

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "muhammed",
  active: false,
  albums: ["goal", 1],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `hello ${guitarist.name.toUpperCase()}!`;
  }
};

console.log(greetGuitarist(evh));

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
