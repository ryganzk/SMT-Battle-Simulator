import {Skill} from "../skills/skill";

//PHYSICAL SKILLS
import {Lunge} from "../../skills/physical/lunge"
import {BestialBite} from "../../skills/physical/bestial_bite"
import {HellishSlash} from "../../skills/physical/hellish_slash"
import {GramSlice} from "../../skills/physical/gram_slice"
import {DreamNeedle} from "../../skills/physical/dream_needle"

//FIRE SKILLS
import {Agi} from "../../skills/fire/agi"

//ICE SKILLS
import {Bufu} from "../../skills/ice/bufu"

//ELECTRIC SKILLS
import {Zio} from "../../skills/electric/zio"

//FORCE SKILLS
import {Zan} from "../../skills/force/zan"

//LIGHT SKILLS
import {Hama} from "../../skills/light/hama"

//DARK SKILLS
import {Mudo} from "../../skills/dark/mudo"

//ALMIGHTY SKILLS
import {LifeDrain} from "../../skills/almighty/life_drain"

//AILMENT SKILLS
import {Makajama} from "../../skills/ailment/makajama";
import {MarinKarin} from "../../skills/ailment/marin_karin";
import {Dormina} from "../../skills/ailment/dormina"
import {Pulinpa} from "../../skills/ailment/pulinpa"
import {Poisma} from "../../skills/ailment/poisma"
import {Dustoma} from "../../skills/ailment/dustoma"

//RECOVERY SKILLS
import {Dia} from "../../skills/recovery/dia"
import {Patra} from "../../skills/recovery/patra"

//SUPPORT SKILLS
import {Tarukaja} from "../../skills/support/tarukaja"
import {Tarunda} from "../../skills/support/tarunda"
import {Rakukaja} from "../../skills/support/rakukaja"
import {Rakunda} from "../../skills/support/rakunda"
import {Sukukaja} from "../../skills/support/sukukaja"
import {Sukunda} from "../../skills/support/sukunda"

//PASSIVE SKILLS

export class SkillCompendium {

    getSkill(skillName: string): Skill {
        switch (skillName.toLowerCase()){
            case 'lunge':
                return new Lunge();
            case 'bestialbite':
                return new BestialBite();
            case 'hellishslash':
                return new HellishSlash();
            case 'gramslice':
                return new GramSlice();
            case 'dreamneedle':
                return new DreamNeedle();
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
            case 'makajama':
                return new Makajama();
            case 'marinkarin':
                return new MarinKarin();
            case 'dormina':
                return new Dormina();
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
                throw new Error("A SKILL WITH THE NAME \"" + skillName.toUpperCase() + "\" DOES NOT EXIST!");
        }
    }
}