import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Angel extends Demon {
    constructor() {
        super("Angel", 10, 59, 103, 6, 8, 16, 12, 12, new TypeResistances(1, 1, 1, 1, 0, 3, 0), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, 0, 0, -3, 3, -4, 0, 0, 2, 2));
    }
}