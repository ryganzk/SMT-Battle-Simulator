import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Sandman extends Demon {
    constructor() {
        super("Sandman", 8, 55, 81, 9, 8, 9, 11, 12, new TypeResistances(1, 1, 1, 0, 2, 1, 1), new AilResistances(1, 1, 3, 1, 1, 1), new SkillPotential(1, 0, 0, -3, 1, 0, 0, 0, 3, 0, -1));
    }
}