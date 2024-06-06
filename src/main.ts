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
