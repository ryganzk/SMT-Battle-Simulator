import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let rakundaEffect = new SkillEffects('def', 'lower');

export class Rakunda extends SupportSkill {
    constructor() {
        super("Rakunda", "Lowers Defense of 1 foe by 1 rank for 3 turns", 8, "single", [rakundaEffect], '');
    }
}