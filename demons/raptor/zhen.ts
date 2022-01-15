import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Zhen extends Demon {
    constructor() {
        super("Zhen", 14, 73, 97, 15, 11, 9, 14, 16, new TypeResistances(1, 0, 1, 1, 1, 1, 2), new AilResistances(1, 1, 1, 1, 2, 2), new SkillPotential(2, -3, 0, 1, 0, 0, 0, 0, 2, 0, 0));
    }
}