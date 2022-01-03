import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Slime extends Demon {
    constructor() {
        super("Slime", 41, 40, 5, 6, 4, 3, 4, new TypeResistances(1, 0, 0, 0, 0, 0, 1), new AilResistances(1, 1, 1, 1, 2, 1), new SkillPotential(1, -3, -3, -3, -3, -3, 0, 0, 3, 0, -1));
    }
}