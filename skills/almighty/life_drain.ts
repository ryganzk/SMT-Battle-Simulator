import {AttackSkill} from "../../structures/skills/attack_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let lifeDrainEffect = new SkillEffects('hp', 'steal');

export class LifeDrain extends AttackSkill {
    constructor() {
        super("Life Drain", "Weak Almighty HP drain attack to 1 foe", "Almi", 10, "single", [120], 98, 0, 0, [], [lifeDrainEffect], false, '');
    }
}