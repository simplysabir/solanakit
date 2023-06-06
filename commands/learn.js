#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";


const sleep = (ms = 2000) => new Promise((r)=>setTimeout(r, ms));

async function learn(){
    const spinner = createSpinner('Getting resources...').start();
    await sleep();
    spinner.stop();
}
function finalAnswer(){
    console.log(`
    ${chalk.bgYellowBright(' buildspace ')} : https://buildspace.so/solana-core
    `);
}
await learn();
finalAnswer();