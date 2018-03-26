import * as encounter from './encounter.js';

export class Environment {
    constructor(name) {
        this.name =  name;
    }

    stumbleUpon() {
        this.encounter = encounter.generate();
        const interaction = this.name + "You Just a Stumbed upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
};
