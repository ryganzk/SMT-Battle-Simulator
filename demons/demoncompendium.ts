import {Demon} from "../demon";

//TYPES OF DEMONS
import {Slime} from "./foul/slime";
import {Pixie} from "./fairy/pixie";
import {Preta} from "./haunt/preta";
import {Onmoraki} from "./raptor/onmoraki";

export class DemonCompendium {
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