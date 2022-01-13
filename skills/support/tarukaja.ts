import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let tarukajaEffect = new SkillEffects('atk', 'raise');

export class Tarukaja extends SupportSkill {
    constructor() {
        super("Tarukaja", "Raises Attack of 1 ally by 1 rank for 3 turns", 8, "single", [tarukajaEffect], '');
    }
}