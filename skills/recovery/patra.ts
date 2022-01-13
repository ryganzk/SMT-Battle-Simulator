import {HealingSkill} from "../../structures/skills/healing_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let patraEffect = new SkillEffects('ailment', 'remove');

export class Patra extends HealingSkill {
    constructor() {
        super("Patra", "Cures status ailments on 1 ally", 8, "single", [patraEffect], '');
    }
}