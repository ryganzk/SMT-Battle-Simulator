import {SupportSkill} from "../../structures/skills/support_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let rakukajaEffect = new SkillEffects('def', 'raise');

export class Rakukaja extends SupportSkill {
    constructor() {
        super("Rakukaja", "Raises Defense of 1 ally by 1 rank for 3 turns", 8, "single", [rakukajaEffect], '');
    }
}