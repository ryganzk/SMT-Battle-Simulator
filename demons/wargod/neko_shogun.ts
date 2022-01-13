import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class NekoShogun extends Demon {
    constructor() {
        super("Neko Shogun", 5, 57, 73, 6, 11, 7, 4, 8, new TypeResistances(1, 0, 1, 3, 0, 2, 1), new AilResistances(1, 1, 1, 2, 2, 2), new SkillPotential(0, -1, 0, 0, -3, 0, 0, -4, 0, 3, 3));
    }
}