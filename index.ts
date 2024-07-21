#! /usr/bin/env node

import inquirer from "inquirer";

let currencies: { [key: string]: number } = {
  USD: 1, // base currency
  PKR: 277.91,
  EUR: 0.91,
  INR: 83.72,
  GBP: 0.77,
  BDT: 117.42,
  LKR: 303.4,
  AFN: 70.64,
};

const usersAnswers = await inquirer.prompt([
  {
    name: "from",
    message: "From which currency you want to convert your amount?",
    type: "list",
    choices: ["USD", "PKR", "EUR", "INR", "GBP", "BDT", "LKR", "AFN"],
  },
  {
    name: "to",
    message: "In which currency you want to convert your amount?",
    type: "list",
    choices: ["USD", "PKR", "EUR", "INR", "GBP", "BDT", "LKR", "AFN"],
  },
  {
    name: "amount",
    message: "Enter the amount you want to convert",
    type: "number",
  },
]);

let fromAmount: number = currencies[usersAnswers.from];
let toAmount: number = currencies[usersAnswers.to];
let amountToConvert: number = usersAnswers.amount;
let baseAmount: number = amountToConvert / fromAmount;
let convertedAmount: number = baseAmount * toAmount;
console.log(`Your converted amount is: ${convertedAmount.toFixed(3)}`);
