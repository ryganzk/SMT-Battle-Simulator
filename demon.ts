import {Skill} from "./skill"
import {TypeResistances} from "./type_resistances";
import {AilResistances} from "./ail_resistances";
import {SkillPotential} from "./skill_potential";
import {PartyMember} from "./party_member";

export class Demon extends PartyMember {
    name: string;
    hp: number; mp: number; str: number; vit: number; mag: number; agi: number; luc: number;
    skillList: Skill[];
    typeResistances: TypeResistances;
    ailResistances: AilResistances;
    skillPotential: SkillPotential; 


    constructor(name: string, hpAmt: number, mpAmt: number, strAmt: number, vitAmt: number, magAmt: number, agiAmt: number, lucAmt: number,
            typeResistances: TypeResistances,
            ailResistances: AilResistances,
            skillPotential: SkillPotential) {
        super();
        this.name = name;
        this.hp = hpAmt;
        this.mp = mpAmt;
        this.str = strAmt;
        this.vit = vitAmt;
        this.mag = magAmt;
        this.agi = agiAmt;
        this.luc = lucAmt;
        this.typeResistances = typeResistances;
        this.ailResistances = ailResistances;
        this.skillPotential = skillPotential;
        this.skillList = [];
    }
}