#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstname"},
    {message: "enter second number", type: "number", name: "secondname"},
    {
     message: "select one of the operators to perform the operation",
     type: "list",
     name: "operator",
     choices: ["addition", "subtration", "multiplication", "division"]
    },
]);

//conditional statement
if(answer.operator === "addition") {
    console.log(answer.firstname + answer.secondname);
} else if (answer.operator === "subtration") {
    console.log(answer.firstname - answer.secondname);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstname * answer.secondname);
}  else if (answer.operator === "division") {
    console.log(answer.firstname / answer.secondname);
} else {
    console.log("please select valid operator");
}
