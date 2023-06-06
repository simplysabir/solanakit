#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// const rainbowTitle = chalkAnimation.rainbow('Who Wants to be a JavaScript Millionare? \n');
// await sleep();
// rainbowTitle.stop();


const sleep = (ms = 2000) => new Promise((r)=>setTimeout(r, ms));

async function welcome(){
    // console.clear();
    const rainbowTitle = chalkAnimation.rainbow('Thank you for Using solanakit. \n').start();
    await sleep();
    rainbowTitle.stop();

}

function intro(){
    console.log(`You can Type ${chalk.bgGreenBright(' solanakit help ')} to list down all of the available commands.`)
}
await welcome();
intro();