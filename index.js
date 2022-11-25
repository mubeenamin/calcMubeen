#!usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from "nanospinner";
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    // const titleName = chalkAnimation.neon("Calculator");
    const titleName = figlet("Calculator", (err, data) => {
        console.log(gradient.pastel.multiline(data) + "\n");
    });
    await sleep();
    // titleName.stop();
}
async function calc() {
    const question1 = await inquirer.prompt({
        name: 'fristNumber',
        type: 'input',
        message: 'Enter First Number',
        validate: (answers) => {
            if (isNaN(answers)) {
                return 'Please enter a valid number';
            }
            return true;
        }
    });
    const question2 = await inquirer.prompt({
        name: 'secondNumber',
        type: 'input',
        message: 'Enter second Number',
        validate: (answers) => {
            if (isNaN(answers)) {
                return 'Please enter a valid number';
            }
            return true;
        }
    });
    const question3 = await inquirer.prompt({
        name: 'operations',
        type: 'list',
        message: 'Select one operator',
        choices: ['Addition', 'subtraction', 'division', 'multiplication']
    });
    const num1 = Number(question1.fristNumber);
    const num2 = Number(question2.secondNumber);
    const operators = question3.operations;
    let result;
    if (operators === 'Addition') {
        result = (num1 + num2);
    }
    else if (operators === 'subtraction') {
        result = (num1 - num2);
    }
    else if (operators === 'division') {
        result = (num1 / num2);
    }
    else if (operators === 'multiplication') {
        result = (num1 * num2);
    }
    const spinner = createSpinner('Calculatiing...').start();
    await sleep();
    spinner.success({ text: `answer is ${result}. ` });
}
await welcome();
await calc();