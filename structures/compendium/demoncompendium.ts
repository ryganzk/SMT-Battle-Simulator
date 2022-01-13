import {Demon} from "../characters/demon"

//TYPES OF DEMONS
import {Slime} from "../../demons/foul/slime"
import {Pixie} from "../../demons/fairy/pixie"
import {Preta} from "../../demons/haunt/preta"
import {Onmoraki} from "../../demons/raptor/onmoraki"
import {NekoShogun} from "../../demons/wargod/neko_shogun"
import {Mandrake} from "../../demons/yoma/mandrake"
import {Kodama} from "../../demons/jirae/kodama"

export class DemonCompendium {

    summonDemon(demName: string, maxLevel: number): Demon {
        let demon: Demon
        switch (demName.toLowerCase()){
            case 'slime':
                demon = new Slime()
                break
            case 'pixie':
                demon = new Pixie()
                break
            case 'preta':
                demon = new Preta()
                break
            case 'onmoraki':
                demon = new Onmoraki()
                break
            case 'nekoshogun':
                demon = new NekoShogun()
                break
            case 'mandrake':
                demon = new Mandrake()
                break
            case 'kodama':
                demon = new Kodama()
                break
            default:
                throw new Error("A DEMON WITH THE NAME \"" + demName + "\" DOES NOT EXIST!")
        }

        if(demon.getLevel() > maxLevel) {
            throw new Error(demon.getName() + "'S LEVEL IS HIGHER THAN THE MAXIMUM LEVEL OF " + maxLevel)
        }

        return demon
    }
}