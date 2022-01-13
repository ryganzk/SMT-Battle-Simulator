import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let poismaEffect = new SkillEffects('poison', 85);

export class Poisma extends AilmentSkill {
    constructor() {
        super("Poisma", "Chance of inflicting Poison to 1 foe", 10, "single", [poismaEffect], '');
    }
}