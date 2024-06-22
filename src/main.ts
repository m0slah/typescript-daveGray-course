// interface TransactionObject {
//     readonly [index: string]: number
// }

interface TransactionObject {
    readonly [index: string]: number

    pizza: number,
    book: number,
    job: number,
}

const todayTransactions: TransactionObject = {
    pizza: -10,
    book: -5,
    job: 50,
    tree: 40,// but not required because we don't have in interface
}

console.log(todayTransactions.pizza);
console.log(todayTransactions['pizza']);

let prop: string = 'pizza';
console.log(todayTransactions[prop])

const todaysNet = (transactions: TransactionObject): number => {
    let total = 0;

    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total

}

console.log(todaysNet(todayTransactions))

todayTransactions.pizza = 40;
console.log(todayTransactions.pizza)

// console.log(todayTransactions['dave'])

/////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined;

    name: string,
    GPA: number,
    classes?: number[];
}

const student: Student = {
    name: "john",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student)

console.log("before")

for (const key in student) {
    console.log(key as keyof Student);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

///////////////////////////////////////

interface IStudent {
    name: string;
    age: number;
}

interface IStudentClass extends IStudent {
    class: string
}

const student1: IStudentClass = {
    class: "hello",
    name: "test",
    age: 11
}

console.log(student1);

interface IStringByNumber {
    [key: string]: string
}

const nameOfPlayer: IStringByNumber = {
    "name":"muhammed"
}

console.log(nameOfPlayer['muhammed']);

const person={
    name:"hello",
}

//////////////////////////