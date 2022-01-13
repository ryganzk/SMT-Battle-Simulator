import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Kodama extends Demon {
    constructor() {
        super("Kodama", 6, 46, 65, 5, 8, 9, 8, 9, new TypeResistances(1, 0, 0, 1, 2, 1, 1), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(0, -3, -3, 0, 2, 0, 0, 0, 1, 1, 0));
    }
}