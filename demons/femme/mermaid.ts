import {Demon} from "../../structures/characters/demon";
import {TypeResistances} from "../../structures/resistances/type_resistances";
import {AilResistances} from "../../structures/resistances/ail_resistances";
import {SkillPotential} from "../../structures/skills/skill_potential";

export class Mermaid extends Demon {
    constructor() {
        super("Mermaid", 12, 72, 122, 8, 9, 17, 11, 15, new TypeResistances(1, 0, 3, 0, 1, 1, 1), new AilResistances(1, 1, 2, 1, 1, 1), new SkillPotential(-2, -2, 3, 0, 0, 0, 0, 0, 3, 0, 2));
    }
}