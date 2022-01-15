import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Azumi extends Demon {
    constructor() {
        super("Azumi", 11, 68, 77, 10, 10, 12, 13, 12, new TypeResistances(1, 1, 2, 0, 1, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, 0, 2, -3, 0, 0, 0, 0, 0, 1, 0));
    }
}