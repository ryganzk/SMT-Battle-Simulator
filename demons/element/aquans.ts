import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Aquans extends Demon {
    constructor() {
        super("Aquans", 15, 72, 109, 8, 11, 20, 13, 15, new TypeResistances(1, 0, 2, 1, 1, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, -4, 3, 0, 0, 0, 0, 0, 1, 0, 0));
    }
}