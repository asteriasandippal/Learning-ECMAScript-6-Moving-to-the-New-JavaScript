const defaultLine = "Start your journey now!";
const BR = "<br />";
const print = (...args) => console.log(args[0] + ": " + args[1]);

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
    } else {
        addToOutput(commands.value);
    }
}

main();

print("log", "hello");