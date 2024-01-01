"use strict";
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
let bands = [];
bands.push("one");
// bands.push(12); //Argument of type 'number' is not assignable to parameter of type 'string'.
// bands.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.
