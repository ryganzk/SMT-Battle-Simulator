import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Turdak extends Demon {
    constructor() {
        super("Turdak", 11, 80, 70, 15, 13, 7, 10, 8, new TypeResistances(1, 1, 1, 1, 0, 1, 2), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(2, 0, 0, 0, -3, 0, 1, 0, 0, 0, 0));
    }
}