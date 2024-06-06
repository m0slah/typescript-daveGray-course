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
