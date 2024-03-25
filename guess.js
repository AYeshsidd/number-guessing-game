#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log("guess for 100$");
const answer = await inquirer.prompt([{
        name: "userguessnumber",
        type: "number",
        message: "please guess the number between (1 - 6)"
    }]);
if (answer.userguessnumber === randomnumber) {
    console.log("congaratulations! you won 100$");
}
else {
    console.log("oOPS ! Incorret");
}
console.log(answer);
