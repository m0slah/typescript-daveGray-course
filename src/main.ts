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

//////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount = (): number => {
    return Peeps.count;
  };

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const muhammed = new Peeps("Muhammed");
const john = new Peeps("john");
const david = new Peeps("david");

console.log(muhammed);
console.log(john);
console.log(david);

console.log("number is class instantiated :" + Peeps.count); //that is tell how many classes has been instantiated

///////////////////////