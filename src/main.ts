class Coder {
  secondLanguage!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected language: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.language = language;
  }

  getAge = () => {
    return this.age;
  };
}

const student1: Coder = new Coder("muhammed", "hello", 23, "kurdish");

console.log(student1.getAge());
console.log(student1.music);
console.log(student1.getAge());

console.log(student1);

class webDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    language: string
  ) {
    super(name, music, age, language);
    this.computer = computer;
  }

  getLanguague = () => {
    return this.language;
  };
}

const dev1: webDev = new webDev("lenovo", "hama", "dimonds", 23, "javascript");

console.log(dev1.getLanguague());

///////////////////////////////////////////////////

interface Player {
  name: string;
  playerNumber: number;
  transfer(from: string, to: string): string;
}

class Player implements Player {
  constructor(public name: string, playerNumber: number) {
    this.name = name;
    this.playerNumber = playerNumber;
  }

  transfer(from: string, to: string): string {
    return `the player transfer form ${from} to ${to}`;
  }
}

const player: Player = new Player("palmer", 20);



console.log(player);


console.log(player.transfer("man city", "chelsea"));
