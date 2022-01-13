import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Daemon extends Demon {
    constructor() {
        super("Daemon", 7, 59, 73, 11, 6, 10, 9, 7, new TypeResistances(1, 2, 1, 0, 1, 0, 3), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(2, 2, 0, 0, 0, -4, 2, 0, 0, 0, 0));
    }
}