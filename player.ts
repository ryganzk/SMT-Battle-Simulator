import {Demon} from "./demon";
import {Skill} from "./skill";
import {TypeResistances} from "./type_resistances";
import {AilResistances} from "./ail_resistances";
import {SkillPotential} from "./skill_potential";
import {PartyMember} from "./party_member";

export class Player extends PartyMember {
    name: string;
    hp: number; mp: number; str: number; vit: number; mag: number; agi: number; luc: number;
    demonList: Demon[];
    skillList: Skill[];
    typeResistances: TypeResistances;
    ailResistances: AilResistances;
    skillPotential: SkillPotential;

    constructor(name: string) {
        super();
        this.name = name;
        this.hp = 51;
        this.mp = 68;
        this.str = 5;
        this.vit = 5;
        this.mag = 5;
        this.agi = 5;
        this.luc = 5;
        this.typeResistances = new TypeResistances(0, 0, 0, 0, 0, 0, 0);
        this.ailResistances = new AilResistances(0, 0, 0, 0, 0, 0);
        this.skillPotential = new SkillPotential(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);;
        this.demonList = [];
        this.skillList = [];
    }

    setResistances(demon: Demon) {
        this.typeResistances = demon.getAllTypeResistances();
        this.ailResistances = demon.getAllAilmentResistances();
    }

    addDemon(demon: Demon) {
        this.demonList.push(demon);
    }

    getDemon(demon: string): Demon {
        demon = demon.charAt(0).toUpperCase + demon.substring(1);
        for(let i = 0; i < this.demonList.length; i++) {
            if(demon = this.demonList[i].name) {
                return this.demonList[i];
            }
        }
    }

    getDemonName(index: number): string {
        return this.demonList[index].name;
    }

    getDemonListLength(): number {
        return this.demonList.length;
    }
}