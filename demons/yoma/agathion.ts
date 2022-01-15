import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Agathion extends Demon {
    constructor() {
        super("Agathion", 10, 55, 93, 7, 9, 14, 11, 11, new TypeResistances(1, 1, 0, 3, 1, 1, 0), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, -4, 2, 0, 0, 0, 0, 0, 0, 2));
    }
}