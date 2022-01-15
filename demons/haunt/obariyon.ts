import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Obariyon extends Demon {
    constructor() {
        super("Obariyon", 12, 71, 91, 14, 10, 9, 13, 12, new TypeResistances(1, 1, 0, 2, 1, 0, 2), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(3, 0, -3, 0, 0, 0, 0, 0, 0, 1, 0));
    }
}