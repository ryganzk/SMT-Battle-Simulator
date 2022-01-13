import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class CaitSith extends Demon {
    constructor() {
        super("Cait Sith", 7, 54, 70, 10, 7, 10, 7, 5, new TypeResistances(1, 1, 1, 2, 0, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, 0, 1, -3, 0, 0, 0, 0, 1, 1));
    }
}