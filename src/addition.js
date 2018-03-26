export const print = (...args) => console.log(args[0] + ": " + args[1]);

export const option = {
    __intro: "You can type",
    __options: ["left", "right", "up", "down", "help"],
    outputOptions() {
        this.__options.forEach(f => addToOutput(this.__intro + " " + f));
    }
}