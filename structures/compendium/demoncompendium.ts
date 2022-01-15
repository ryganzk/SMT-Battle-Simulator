import {Demon} from "../characters/demon"

//TYPES OF DEMONS
import {Slime} from "../../demons/foul/slime"
import {Pixie} from "../../demons/fairy/pixie"
import {Preta} from "../../demons/haunt/preta"
import {Onmoraki} from "../../demons/raptor/onmoraki"
import {NekoShogun} from "../../demons/wargod/neko_shogun"
import {Mandrake} from "../../demons/yoma/mandrake"
import {Kodama} from "../../demons/jirae/kodama"
import {CaitSith} from "../../demons/beast/cait_sith"
import {Daemon} from "../../demons/brute/daemon"
import {Sandman} from "../../demons/night/sandman"
import {Erthys} from "../../demons/element/erthys"
import {Agathion} from "../../demons/yoma/agathion"
import {Angel} from "../../demons/divine/angel"
import {Turdak} from "../../demons/jaki/turdak"
import {Mermaid} from "../../demons/femme/mermaid"
import {Obariyon} from "../../demons/haunt/obariyon"
import {Aeros} from "../../demons/element/aeros"
import {Tsuchigumo} from "../../demons/jirae/tsuchigumo"
import {Bicorn} from "../../demons/wilder/bicorn"
import {Zhen} from "../../demons/raptor/zhen"
import {Fortuna} from "../../demons/megami/fortuna"
import {Aquans} from "../../demons/element/aquans"

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
            case 'cait sith':
                demon = new CaitSith()
                break
            case 'daemon':
                demon = new Daemon()
                break
            case 'sandman':
                demon = new Sandman()
                break
            case 'erthys':
                demon = new Erthys()
                break
            case 'agathion':
                demon = new Agathion()
                break
            case 'angel':
                demon = new Angel()
                break
            case 'turdak':
                demon = new Turdak()
                break
            case 'mermaid':
                demon = new Mermaid()
                break
            case 'obariyon':
                demon = new Obariyon()
                break
            case 'tsuchigumo':
                demon = new Tsuchigumo()
                break
            case 'bicorn':
                demon = new Bicorn()
                break
            case 'zhen':
                demon = new Zhen()
                break
            case 'aeros':
                demon = new Aeros()
                break
            case 'fortuna':
                demon = new Fortuna()
                break
            case 'aquans':
                demon = new Aquans()
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