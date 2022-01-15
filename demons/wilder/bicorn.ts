import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Bicorn extends Demon {
    constructor() {
        super("Bicorn", 14, 88, 76, 18, 14, 8, 13, 11, new TypeResistances(1, 1, 1, 0, 1, 0, 3), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(2, 0, 0, -3, 0, -2, 2, 0, 0, -1, 0));
    }
}