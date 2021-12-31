import {Skill} from "../skill";

//PHYSICAL SKILLS
import {Lunge} from "./physical/lunge"
import {BestialBite} from "./physical/bestial_bite"

//FIRE SKILLS
import {Agi} from "./fire/agi"

//ICE SKILLS
import {Bufu} from "./ice/bufu"

//ELECTRIC SKILLS
import {Zio} from "./electric/zio"

//FORCE SKILLS
import {Zan} from "./force/zan"

//LIGHT SKILLS
import {Hama} from "./light/hama"

//DARK SKILLS
import {Mudo} from "./dark/mudo"

//ALMIGHTY SKILLS
import {LifeDrain} from "./almighty/life_drain"

//AILMENT SKILLS
import {Pulinpa} from "./ailment/pulinpa"
import {Poisma} from "./ailment/poisma"
import {Dustoma} from "./ailment/dustoma"

//RECOVERY SKILLS
import {Dia} from "./recovery/dia"
import {Patra} from "./recovery/patra"

//SUPPORT SKILLS
import {Tarukaja} from "./support/tarukaja"
import {Tarunda} from "./support/tarunda"
import {Rakukaja} from "./support/rakukaja"
import {Rakunda} from "./support/rakunda"
import {Sukukaja} from "./support/sukukaja"
import {Sukunda} from "./support/sukunda"


//PASSIVE SKILLS

export class SkillCompendium {
    constructor(){
        
    }

    getSkill(skillName: string): Skill {
        switch (skillName.toLowerCase()){
            case 'lunge':
                return new Lunge();
            case 'bestialbite':
                return new BestialBite();
            case 'agi':
                return new Agi();
            case 'bufu':
                return new Bufu();
            case 'zio':
                return new Zio();
            case 'zan':
                return new Zan();
            case 'hama':
                return new Hama();
            case 'mudo':
                return new Mudo();
            case 'lifedrain':
                return new LifeDrain();
            case 'pulinpa':
                return new Pulinpa();
            case 'poisma':
                return new Poisma();
            case 'dustoma':
                return new Dustoma();
            case 'dia':
                return new Dia();
            case 'patra':
                return new Patra();
            case 'tarukaja':
                return new Tarukaja();
            case 'tarunda':
                return new Tarunda();
            case 'rakukaja':
                return new Rakukaja();
            case 'rakunda':
                return new Rakunda();
            case 'sukukaja':
                return new Sukukaja();
            case 'sukunda':
                return new Sukunda();
            default:
                throw new Error("A skill with the name \"" + skillName + "\" does not exist!");
        }
    }
}