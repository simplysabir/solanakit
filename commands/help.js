#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";


const sleep = (ms = 2000) => new Promise((r)=>setTimeout(r, ms));

async function help(){
    const rainbowTitle = chalkAnimation.karaoke('Here is the list of commands available.. \n').start();
    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgYellow(' cnft ')} : For getting all the resources related to compressed NFTs.

    ${chalk.bgYellow(' faucet ')} : For getting all the resources related to getting devnet faucet.

    ${chalk.bgYellow(' learn ')} : For getting all the resources to learn solana development. 

    ${chalk.bgRedBright(' note ')} : Type commands like this ${chalk.red('solanakit command_name')}
    `)
}

await help();