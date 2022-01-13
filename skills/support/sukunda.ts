import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let sukundaEffect = new SkillEffects('spd', 'lower');

export class Sukunda extends SupportSkill {
    constructor() {
        super("Sukunda", "Lowers Accuracy/Evasion of 1 foe by 1 rank for 3 turns", 8, "single", [sukundaEffect], '');
    }
}