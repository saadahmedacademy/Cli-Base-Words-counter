#! /usr/bin/env node
// Import packages 
import inquirer from 'inquirer';
// To take the sentence from user
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Words: "
    }
]);
// To remove the whitespace by using trim function and add all words in an array
// by using split() function
const words = answers.Sentence.trim().split(" ");
// To print the array on console
console.log(`\nHere is your sentence\n"${words.join(' ')}"`);
// To print the count of words 
console.log(`\nThe total words in your sentence are ${words.length}\n`);
