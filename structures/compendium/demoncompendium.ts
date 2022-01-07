import {Demon} from "../characters/demon";

//TYPES OF DEMONS
import {Slime} from "../../demons/foul/slime";
import {Pixie} from "../../demons/fairy/pixie";
import {Preta} from "../../demons/haunt/preta";
import {Onmoraki} from "../../demons/raptor/onmoraki";

export class DemonCompendium {

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
                throw new Error("A DEMON WITH THE NAME \"" + demName + "\" DOES NOT EXIST!");
        }
    }
}