import { Environment } from './environment.js';
import {print, option} from './addition.js';

const defaultLine = "Start your journey now!";
const BR = "<br />";

const environment = new Environment("Forest --");
function main() {
    let element = document.querySelector("#enter");
    element.addEventListener("click", onClickEnter, false);
}

function addToOutput(newLine="Start your journey now!") {
    let output = document.querySelector("#output");

    output.innerHTML = output.innerHTML + "<br />" + newLine;
}

function onClickEnter() {
    let commands = document.querySelector("#commands");
    if (commands.value === "help") {
        option.outputOptions();
    } else if (commands.value === "left") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "right") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "up") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value === "down") {
        addToOutput(environment.stumbleUpon());
    }
     else {
        addToOutput(commands.value);
    }
}

main();

print("log", "hello");