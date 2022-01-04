import {Skill} from "../skills/skill"
import {TypeResistances} from "../resistances/type_resistances";
import {AilResistances} from "../resistances/ail_resistances";
import {SkillPotential} from "../skills/skill_potential";
import {PartyMember} from "./party_member";

export class Demon extends PartyMember {

    constructor(name: string, lvl: number, hpAmt: number, mpAmt: number, strAmt: number, vitAmt: number, magAmt: number, agiAmt: number, lucAmt: number,
            typeResistances: TypeResistances,
            ailResistances: AilResistances,
            skillPotential: SkillPotential) {
        super();
        this.name = name;
        this.lvl = lvl;
        this.hp = hpAmt;
        this.mp = mpAmt;
        this.str = strAmt;
        this.vit = vitAmt;
        this.mag = magAmt;
        this.agi = agiAmt;
        this.luc = lucAmt;
        this.hpmpPoints = 0;
        this.statPoints = 0;
        this.typeResistances = typeResistances;
        this.ailResistances = ailResistances;
        this.skillPotential = skillPotential;
        this.skillList = [];
    }
}