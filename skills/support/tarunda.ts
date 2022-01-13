import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let tarundaEffect = new SkillEffects('atk', 'lower');

export class Tarunda extends SupportSkill {
    constructor() {
        super("Tarunda", "Lowers Attack of 1 foe by 1 rank for 3 turns", 8, "single", [tarundaEffect], '');
    }
}