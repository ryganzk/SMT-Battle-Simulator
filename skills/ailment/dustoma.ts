import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let dustomaEffect = new SkillEffects('mirage', 75);

export class Dustoma extends AilmentSkill {
    constructor() {
        super("Dustoma", "Chance of inflicting Mirage to 1 foe", 10, "single", [dustomaEffect], '');
    }
}