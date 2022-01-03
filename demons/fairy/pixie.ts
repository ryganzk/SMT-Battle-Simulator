import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Pixie extends Demon {
    constructor() {
        super("Pixie", 32, 82, 2, 4, 7, 8, 6, new TypeResistances(1, 1, 1, 1, 2, 1, 0), new AilResistances(1, 1, 1, 0, 1, 1), new SkillPotential(0, 0, 0, 0, 1, 0, 0, 0, -1, 1, 1));
    }
}