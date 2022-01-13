import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Mandrake extends Demon {
    constructor() {
        super("Mandrake", 6, 49, 75, 6, 7, 9, 11, 9, new TypeResistances(1, 0, 1, 2, 2, 1, 1), new AilResistances(1, 1, 1, 1, 1, 0), new SkillPotential(0, -3, 0, 1, 0, 0, 0, 0, 3, 1, 0));
    }
}