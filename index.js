import inquirer from "inquirer";
const square = await inquirer.prompt([
    {
        type: "number",
        name: "myNumber",
        message: "plz enter number to get its square",
    }
]);
let num1 = square.myNumber;
console.log(`square of ${num1} is ${num1 * num1}`);
console.log(square.myNumber);
