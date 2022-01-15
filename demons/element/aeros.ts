import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Aeros extends Demon {
    constructor() {
        super("Aeros", 12, 62, 99, 9, 9, 17, 11, 12, new TypeResistances(1, 1, 1, 0, 2, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, 0, -4, 3, 0, 0, 0, 1, 0, 0));
    }
}