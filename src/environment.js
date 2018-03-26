import { Bear } from './encounter.js';

export class Environment {
    constructor(name) {
        this.name =  name;
        this.encounter = new Bear();
    }

    stumbleUpon() {
        const interaction = this.name + "You Just a Stumbed upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
};
