import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Tsuchigumo extends Demon {
    constructor() {
        super("Tsuchigumo", 13, 101, 83, 14, 16, 12, 9, 10, new TypeResistances(1, 1, 0, 2, 1, 1, 1), new AilResistances(1, 0, 2, 1, 1, 1), new SkillPotential(1, 0, 0, 2, 0, 0, 0, 0, 0, -2, 1));
    }
}