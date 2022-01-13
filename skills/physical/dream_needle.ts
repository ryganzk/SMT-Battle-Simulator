import {AttackSkill} from "../../structures/skills/attack_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let dreamNeedleEffect = new SkillEffects('sleep', 55);

export class DreamNeedle extends AttackSkill {
    constructor() {
        super("Bestial Bite", "Weak Physical attack to 1 foe. Chance of inflicting Sleep", "Phys", 5, "single", [110], 98, 0, 0, [], [dreamNeedleEffect], true, '');
    }
}