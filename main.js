#! /usr/bin/env node
import inquirer from "inquirer";
// printing a colurful message 
console.log("\n\tWellcome to \ 'CodewithSameer\' - Currency Convertor");
// Defines the list of the Currencies and their exchange rate
let exchange_rate = {
    "USD": 1,
    "EURO": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277, // Pakistani Rupees
    // Add more currencies and their exchange rate here
};
// Prompt the users to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "please select a currency to convert from:",
        choices: ["USD", "EURO", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "please select a currency to convert into:",
        choices: ["USD", "EURO", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount =${converted_amount}`);
