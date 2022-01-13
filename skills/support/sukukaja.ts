import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let sukukajaEffect = new SkillEffects('spd', 'raise');

export class Sukukaja extends SupportSkill {
    constructor() {
        super("Sukukaja", "Raises Accuracy/Evasion of 1 ally by 1 rank for 3 turns", 8, "single", [sukukajaEffect], '');
    }
}