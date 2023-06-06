#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";


const sleep = (ms = 2000) => new Promise((r)=>setTimeout(r, ms));

async function cnft(){
    const spinner = createSpinner('Getting resources...').start();
    await sleep();
    spinner.stop();
}
function finalAnswer(){
    console.log(`
    ${chalk.bgYellowBright(' minting cnft ')} : https://youtu.be/83nIhnxtlW8  

    ${chalk.bgYellowBright(' merkle tree ')} : https://youtu.be/6BpArf2-R68  
    
    ${chalk.bgYellowBright(' transfer cnft ')} : https://youtu.be/qzr-q_E7H0M  

    `);  
}
await cnft();
finalAnswer();