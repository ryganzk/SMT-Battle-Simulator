import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Fortuna extends Demon {
    constructor() {
        super("Fortuna", 15, 86, 114, 8, 10, 21, 14, 18, new TypeResistances(1, 1, 1, 0, 3, 1, 0), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(-1, 0, 0, -3, 3, 1, -3, 0, 0, 2, 1));
    }
}