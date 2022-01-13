import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Erthys extends Demon {
    constructor() {
        super("Erthys", 9, 73, 62, 8, 12, 11, 9, 9, new TypeResistances(1, 1, 1, 2, 0, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, 0, 3, -4, 0, 0, 0, 1, 0, 0));
    }
}