import {Demon} from "../demon";

//TYPES OF DEMONS
import {Slime} from "./slime";
import {Pixie} from "./pixie";
import {Preta} from "./preta";
import {Onmoraki} from "./onmoraki";

export class Compendium {
    constructor(){
        
    }

    summonDemon(demName: string): Demon {
        switch (demName.toLowerCase()){
            case 'slime':
                return new Slime();
            case 'pixie':
                return new Pixie();
            case 'preta':
                return new Preta();
            case 'onmoraki':
                return new Onmoraki();
            default:
                throw new Error("A demon with the name \"" + demName + "\" does not exist!");
        }
    }
}