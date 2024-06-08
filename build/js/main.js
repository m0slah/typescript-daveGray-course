"use strict";
class Coder {
    constructor(name, music, age, language) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.getAge = () => {
            return this.age;
        };
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
}
const student1 = new Coder("muhammed", "hello", 23, "kurdish");
console.log(student1.getAge());
console.log(student1.music);
console.log(student1.getAge());
console.log(student1);
class webDev extends Coder {
    constructor(computer, name, music, age, language) {
        super(name, music, age, language);
        this.computer = computer;
        this.getLanguague = () => {
            return this.language;
        };
        this.computer = computer;
    }
}
const dev1 = new webDev("lenovo", "hama", "dimonds", 23, "javascript");
console.log(dev1.getLanguague());
class Player {
    constructor(name, playerNumber) {
        this.name = name;
        this.name = name;
        this.playerNumber = playerNumber;
    }
    transfer(from, to) {
        return `the player transfer form ${from} to ${to}`;
    }
}
const player = new Player("palmer", 20);
console.log(player);
console.log(player.transfer("man city", "chelsea"));
//////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
Peeps.getCount = () => {
    return Peeps.count;
};
const muhammed = new Peeps("Muhammed");
const john = new Peeps("john");
const david = new Peeps("david");
console.log(muhammed);
console.log(john);
console.log(david);
//can not access count in object of class becouse of its a static member of Peps
// console.log("count of muhammed object: "+ muhammed.count);
console.log("number is class instantiated :" + Peeps.count); //that is tell how many classes has been instantiated
class Circle {
    static getPi() {
        return this.pi; //is static method you can get pi with this.pi
    }
    getANumber() {
        return Circle.py; //is non static method you must get py with Circle
    }
}
Circle.pi = 3.14;
Circle.py = 3.14;
///////////////////////////////////////////////
class Student {
    constructor(studnetName) {
        this.studnetName = studnetName;
    }
}
// new Student(); //so you can not create a instance in abstract class
// abstact class can only be extended by other classes.
//Like this:
class profile extends Student {
    constructor(studnetName, picture) {
        super(studnetName);
        this.picture = picture;
    }
}
///////////////////////////////////////////
class Bands {
    constructor(dataState) {
        this.dataState = dataState;
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("param is in array is not a string");
        }
    }
}
const myBands = new Bands(["hello", "world"]);
console.log(myBands);
