import {HealingSkill} from "../../structures/skills/healing_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let diaEffect = new SkillEffects('hp', 50);

export class Dia extends HealingSkill {
    constructor() {
        super("Dia", "Slight HP recovery to 1 ally", 8, "single", [diaEffect], '');
    }
}