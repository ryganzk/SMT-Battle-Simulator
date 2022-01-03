import {Skill} from "../skills/skill"
import {TypeResistances} from "../resistances/type_resistances";
import {AilResistances} from "../resistances/ail_resistances";
import {SkillPotential} from "../skills/skill_potential";

export class PartyMember {
    name: string;
    hp: number; mp: number; str: number; vit: number; mag: number; agi: number; luc: number;
    skillList: Skill[];
    typeResistances: TypeResistances;
    ailResistances: AilResistances;
    skillPotential: SkillPotential; 

    getName(): string {
        return this.name;
    }

    getStat(stat: string): number {
        switch (stat.toLowerCase()) {
            case ("hp"):
                return this.hp;
            case ("mp"):
                return this.mp;
            case ("str"):
                return this.str;
            case ("vit"):
                return this.vit;
            case ("mag"):
                return this.mag;
            case ("agi"):
                return this.agi;
            case ("luc"):
                return this.luc;
            default:
                return 0;
        }
    }

    setStat(stat: string, newStat: number) {
        switch (stat.toLowerCase()) {
            case ("hp"):
                this.hp = newStat;
            case ("mp"):
                this.mp = newStat;
            case ("str"):
                this.str = newStat;
            case ("vit"):
                this.vit = newStat;
            case ("mag"):
                this.mag = newStat;
            case ("agi"):
                this.agi = newStat;
            case ("luc"):
                this.luc = newStat;
        }
    }

    getAllTypeResistances(): TypeResistances {
        return this.typeResistances;
    }

    getAllAilmentResistances(): AilResistances {
        return this.ailResistances;
    }

    getSpecificTypeResistance(type: string): number {
        switch(type) {
            case "phys":
                return this.typeResistances.phys;
            case "fire":
                return this.typeResistances.fire;
            case "ice":
                return this.typeResistances.ice;
            case "elec":
                return this.typeResistances.elec;
            case "force":
                return this.typeResistances.force;
            case "light":
                return this.typeResistances.light;
            case "dark":
                return this.typeResistances.dark;
        }
    }

    addSkill(skill: Skill) {
        this.skillList.push(skill);
    }
}