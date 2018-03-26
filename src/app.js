const defaultLine = "Start your journey now!";
const BR = "<br />";
const print = (...args) => console.log(args[0] + ": " + args[1]);

class Bear {
    whenEncounter() {
        return "Grr grow, you enccountered a Bear!";
    }
}

class Environment {
    constructor(name) {
        this.name =  name;
        this.encounter = new Bear();
    }

    stumbleUpon() {
        const interaction = this.name + "You Just a Stumbed upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
};

const environment = new Environment("Forest --");

const option = {
    __intro: "You can type",
    __options: ["left", "right", "up", "down", "help"],
    outputOptions() {
        this.__options.forEach(f => addToOutput(this.__intro + " " + f));
    }
}

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