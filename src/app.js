function main() {
    const element = document.querySelector("#enter");
    element.addEventListener("click", onClickEnter, false);
}

function addToOutput(newLine="Start your journey now!") {
    const output = document.querySelector("#output");

    output.innerHTML = output.innerHTML + "<br />" + newLine;
}

function onClickEnter() {
    const commands = document.querySelector("#commands");

    addToOutput(commands.value);
}

main();
