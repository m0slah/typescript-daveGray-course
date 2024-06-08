"use strict";
// interface TransactionObject {
//     readonly [index: string]: number
// }
const todayTransactions = {
    pizza: -10,
    book: -5,
    job: 50,
    tree: 40, // but not required because we don't have in interface
};
console.log(todayTransactions.pizza);
console.log(todayTransactions['pizza']);
let prop = 'pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
todayTransactions.pizza = 40;
console.log(todayTransactions.pizza);
console.log(todayTransactions['dave']);
