import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let makajamaEffect = new SkillEffects('seal', 65);

export class Makajama extends AilmentSkill {
    constructor() {
        super("Makajama", "Chance of inflicting Seal to 1 foe", 10, "single", [makajamaEffect], '');
    }
}