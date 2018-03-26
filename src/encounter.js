export class Encounter {
    constructor(introText = "") {
        this.introText = introText;
    }
    whenEncounter() {
        return this.introText;
    }
}

export class Bear extends Encounter {
    constructor() {
        super("grr brow, you encountered a beer!");
    }
}

export class Angel extends Encounter {
    constructor() {
        super("Wow, you encountered an Angel! This will give you strength and healing possibility");
    }
}

export class Ghost extends Encounter {
    constructor() {
        super()
        this.introText = "Booh, you encountered a Ghost";
    }
}

export function generate() {
    const number = Math.floor(Math.random() * (4 - 1)) + 1;

    if (number === 1) {
        return new Bear();
    } else if (number === 2) {
        return new Angel();   
    } else if (number === 3) {
        return new Ghost();
    } else if (number === 4){
        return new Encounter();
    }
}